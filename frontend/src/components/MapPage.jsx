import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapApi from "../api";


mapboxgl.accessToken =
  MapApi;


  window.treeData = {
    
  }
const MapPage = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [popup, setPopup] = useState(null);
  // const [name, setName] = useState("treeName");


  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [86, 22],
        zoom: 3.25,
      });

      map.on("load", () => {
        setMap(map);
      });

      map.on("click", (e) => {
        const { lng, lat } = e.lngLat;


        // Create a marker
        const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

        //       const name = 'abc';
        const innerHtmlContent = `<div style="font-size: large;color : black;">
</div>`;

        const divElement = document.createElement("div");
        const nameField = document.createElement("div");
        const Height = document.createElement("div");
        const Properties = document.createElement("div");
        const assignBtn = document.createElement("div");
        nameField.innerHTML = `<input
type="text"
placeholder="Tree name"

>`;

Height.innerHTML = `<input
type="text"
placeholder="Tree Height"

>`;

Properties.innerHTML = `<select>
<option value='medicinal'>medicinal</option>
<option value='cultural'>cultural</option>
<option value='flowering'>flowering</option>
</select>`;
        assignBtn.innerHTML = `<button class='primary'>Assign</button>`;
        
        divElement.innerHTML = innerHtmlContent;
        divElement.appendChild(nameField);
        divElement.appendChild(Height);
        divElement.appendChild(Properties);
        divElement.appendChild(assignBtn);

        console.log(e);
        nameField.addEventListener("input", (e) => {
          console.log(e);
          window.treeData[lat + ':'  + lng] = e.data
        });
        // btn.className = 'btn';
        assignBtn.addEventListener("click", (e) => {
          // Do something with the submitted name, e.g., store it in a database
          console.log(`Submitted name: ${ window.treeData[lat + ':'  + lng]}`);
         
          // Close the popup
          // popup.remove();

          // Clear the name input
          // setName("");

          // Disable the marker dragging
          marker.setDraggable(false);
        });

        const newPopup = new mapboxgl.Popup({ closeButton: false })
          .setLngLat([lng, lat])
          .setDOMContent(divElement)
          .addTo(map);

        setMarkers((prevMarkers) => [...prevMarkers, marker]);
        setPopup(newPopup);
      });
    };

    initializeMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // Empty dependency array to run the effect only once

  // const handleMarkerSubmit = (marker) => {
  //   if (name) {
  //     // Do something with the submitted name, e.g., store it in a database
  //     console.log(`Submitted name: ${name}`);

  //     // Close the popup
  //     popup.remove();

  //     // Clear the name input
  //     setName('');

  //     // Disable the marker dragging
  //     marker.setDraggable(false);
  //   }
  // };

  return <div id="map" style={{ marginTop: '40px', marginLeft: '235px',   width: "70%", height: "400px" }} />;
};

export default MapPage;
