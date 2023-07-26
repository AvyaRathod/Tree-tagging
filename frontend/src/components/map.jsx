import 'leaflet/dist/leaflet.css'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

function MyMapComponent() {
  const [position, setPosition] = useState(null);
  const [plantName, setPlantName] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);

  //This function will set the initial position as per user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const handleSubmit = async () => {
    setFormVisible(false);
    try {
      await axios.post('/api/plants', {
        name: plantName,
        position
      });
    } catch (err) {
      console.error(err);
    }
  }

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  // Ensure position is set before rendering the MapContainer
  if (!position) return 'Loading...';

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <button onClick={() => setFormVisible(true)}>Geotag Plant</button>
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            Plant Name:
            <input type="text" value={plantName} onChange={e => setPlantName(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default MyMapComponent;
