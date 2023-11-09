import './DrugForm.css';
import React, { useRef } from 'react';
import axios from 'axios';

const DrugForm = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://drugs-backend.onrender.com/',
  });

  const nameRef = useRef('');
  const typeRef = useRef('');
  const priceRef = useRef('');
  const usesRef = useRef('');
  const quantityRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const drug = {
      name: nameRef.current.value,
      type: typeRef.current.value,
      price: priceRef.current.value,
      uses: usesRef.current.value,
      quantity: quantityRef.current.value,
    };

    try {
      await axiosInstance.post('/api/v1/addDrugs', drug);
      console.log('Drug Successfully created', drug)

      // Clear the input fields
      nameRef.current.value = '';
      typeRef.current.value = '';
      priceRef.current.value = '';
      usesRef.current.value = '';
      quantityRef.current.value = '';
    } catch (error) {
      console.log("Drugs not registering", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='drug-form'>
      <label>
        Drug Name:
        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder='Drug Name'
          required
        />
      </label>
      <label>
        Drug Type:
        <input
          type="text"
          name="type"
          ref={typeRef}
          placeholder='Drug Type'
          required
        />
      </label>
      <label>
        Drug Price:
        <input
          type="number"
          name="price"
          ref={priceRef}
          placeholder='Drug Price'
          required
        />
      </label>
      <label>
        Drug uses:
        <input
          type="text"
          name="uses"
          ref={usesRef}
          placeholder='Drug Uses'
          required
        />
      </label>
      <label>
        Drug Quantity:
        <input
          type="number"
          name="quantity"
          ref={quantityRef}
          placeholder='Quantity'
          required
        />
      </label>
      <button type="submit">Add Drug</button>
    </form>
  );
};

export default DrugForm;
