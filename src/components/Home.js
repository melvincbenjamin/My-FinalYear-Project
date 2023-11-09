import { useState } from 'react';
import React from 'react';
import DrugList from './DrugList'; // Adjust the import path as needed
import SearchBar from './SearchBar';
import DrugForm from './DrugForm';

const Home = () => {
   const [drugs, setDrugs] = useState([]);

  const addDrug = (newDrug) => {
    // Add the new drug to the drugs state
    setDrugs([...drugs, newDrug]);
  };
  // Sample drug data
  // const drugs = [
  //   { name: 'paracetamol', quantity: 100 },
  //   { name: 'chloroquine', quantity: 50 },
  //   { name: 'bulaquine', quantity: 200 },
  //   { name: 'artasunate', quantity: 150 }
  // ]
  // const [drug, setDrugs] = useState(drugs);

  // Define a function to handle the search
  const handleSearch = (query) => {
    // Implement your search logic here
    if (query) { const filteredDrugs = drugs.filter((Drug) =>
      drugs.name.toLowerCase().includes(query.toLowerCase())
    );
    setDrugs(filteredDrugs);
    }
    else {  
      alert("Please enter a search query to find drugs."); 
    }
  }
  // const handleAddOrUpdateDrug = (formData) => {
  //   // Implement logic to add or update the drug in your data source
  //   // You can add validation, error handling, and update the state accordingly
  //   // For simplicity, we'll just update the state here

  //   const updatedDrugs = [...drugs];
  //   const existingDrugIndex = updatedDrugs.findIndex(
  //     (drug) => drug.name === formData.name
  //   );

  //   if (existingDrugIndex !== -1) {
  //     // Update existing drug
  //     updatedDrugs[existingDrugIndex] = formData;
  //   } else {
  //     // Add a new drug
  //     updatedDrugs.push(formData);
  //   }

  //   setDrugs(updatedDrugs);
  // };
  return (
    <div className="app">
      <h1>Drug Inventory Management System</h1>
      <DrugForm onSubmit={addDrug} />
      <SearchBar onSearch={handleSearch} /> {/* Render the SearchBar component */}
      <DrugList drugs={drugs} /> {/* Render the DrugList component */}
    </div>
  );
};

export default Home;
