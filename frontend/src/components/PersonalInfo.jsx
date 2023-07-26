import React from "react";
import MapPage from "./MapPage";

const TreeTable = () => {
  const treeData = [
    { sno: 1, treeName: 'Banyan', latitude: '40.7128° N', longitude: '74.0060° W' },
    { sno: 2, treeName: 'Neem', latitude: '51.5074° N', longitude: '0.1278° W' },
    { sno: 3, treeName: 'Papaya', latitude: '34.0522° N', longitude: '118.2437° W' },
    // Add more dummy data here
  ];

  return (
    <div className="container mx-auto px-4 py-4 mt-24 mb-24">
      <h1 className="text-3xl font-bold  text-center mb-8">Tree Data</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-200">
            <th className="px-4 py-2">Sno.</th>
            <th className="px-4 py-2">Tree Name</th>
            <th className="px-4 py-2">Latitude</th>
            <th className="px-4 py-2">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {treeData.map((tree, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-400' : ''}>
              <td className="border px-4 py-2">{tree.sno}</td>
              <td className="border px-4 py-2">{tree.treeName}</td>
              <td className="border px-4 py-2">{tree.latitude}</td>
              <td className="border px-4 py-2">{tree.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function PersonalInfo() {
    
    const user = {
        name: 'John Doe',
        number: '1234567890',
        email: 'johndoe@example.com',
        numberOfEvents : 10
    };

    return (
    <>
    <div className="max-w-2xl mx-auto ">
    <h1 className="text-4xl font-bold mb-4 text-center mt-12 mr-2">User Profile</h1>
      <div className="block w-full lg:w-3/10 p-4 mt-12 mr-2 bg-white rounded shadow border-solid border-2 border-[#51b484]-500">
        
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg">Number: {user.number}</p>
        <p className="text-lg">Email: {user.email}</p>
        <p className="text-lg">Number of events participated in: {user.numberOfEvents}</p>
      </div>


      <TreeTable />
     
    </div>

        <MapPage />

    </>
  )
}