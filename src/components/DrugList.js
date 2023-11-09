import React, { useState, useEffect } from 'react';
import './DrugList.css';
import axios from 'axios'

const DrugList = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://drugs-backend.onrender.com/',
});

const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        axiosInstance.get('/api/v1/allDrugs').then((response) => {
            const allDrugs = response.data.sort((p1, p2) => p1.id - p2.id);
            setDrugs(allDrugs);
        })
        .catch((error) => {
            console.log("Error fetching data", error)
        });
    }, []);
  // 'drugs' should be an array of drug objects, e.g. [{ name: 'Drug A', quantity: 100 }, ...]
  return (
    <div className="drug-list">
      <h2>Drug Listings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Uses</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug, index) => (
            <tr key={index}>
              <td>{drug.name}</td>
              <td>{drug.type}</td>
              <td>{drug.price}</td>
              <td>{drug.uses}</td>
              <td>{drug.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrugList;
