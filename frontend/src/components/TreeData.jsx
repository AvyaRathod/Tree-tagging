// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import MapPage from "./MapPage";
// import { Link, Navigate } from "react-router-dom";

export default function TreeData() {
  function handleLoginSubmit(ev) {
    ev.preventDefault();
    console.log(name, treeName, treeHeight, treeAge);
  }

  const [name, setName] = useState("");
  const [treeName, setTreeName] = useState("");
  const [treeHeight, setTreeHeight] = useState("");
  const [treeAge, setTreeAge] = useState("");
  const [ShowMap, setShowMap] = useState(false);

  return (
    <div className="mt-24 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Log your tree!</h1>
        <form
          className="max-w-md mx-auto mt-10 "
          action=""
          onSubmit={handleLoginSubmit}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the name of the tree"
            value={treeName}
            onChange={(ev) => setTreeName(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the age of the tree"
            value={treeAge}
            onChange={(ev) => setTreeAge(ev.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the height of the tree"
            value={treeHeight}
            onChange={(ev) => setTreeHeight(ev.target.value)}
          />

          <select>
            <option value="Medicinal">Medicinal</option>
            <option value="Cultural">Cultural</option>
            <option value="Flowering">Flowering</option>
          </select>

          <button className="primary" onClick={() => setShowMap(!ShowMap)}>
            Add location
          </button>

          {ShowMap ? <MapPage /> : null}

          <button className="primary mt-10">Add tree data</button>
          <Link to={"/landing"}>
            <p className=" text-center mt-10 underline">Back to home</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
