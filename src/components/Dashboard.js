import React from 'react'
import './dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className='dashboard-header'>
                <h1>Dashboard</h1>
            </div>

            <div className='dashboard-body'>
                <div className='patient-information'>
                    <h3 className='patient-info'>Patient Information</h3>

                    <form className='dashboard-form'>
                    <label>
                        Patient ssn:
                        <input
                        type="text"
                        name="ssn"
                        // value={formData.name || ''}
                        // onChange={handleChange}
                        placeholder='0001'
                        required
                        />
                    </label>
                    <label>
                        Patient Name:
                        <input
                        type="text"
                        name="name"
                        // value={formData.name || ''}
                        // onChange={handleChange}
                        placeholder='Weiwen Zhang'
                        required
                        />
                    </label>
                    <label>
                        Patient Phone:
                        <input
                        type="text"
                        name="phone"
                        // value={formData.name || ''}
                        // onChange={handleChange}
                        placeholder='301-243-7523'
                        required
                        />
                    </label>
                    <label>
                        Patient Address:
                        <input
                        type="text"
                        name="address"
                        // value={formData.name || ''}
                        // onChange={handleChange}
                        placeholder='7321 Riggs Rd.'
                        required
                        />
                    </label>
                    <label>
                        Patient Insurance:
                        <input
                        type="text"
                           name="insurance"
                        // value={formData.name || ''}
                        // onChange={handleChange}
                        placeholder='123'
                        required
                        />
                    </label>
                    <button type='submit'>Load Patient</button>
                    </form>
                </div>

                <div className='patient-body'>
                    <div className='patient-drug-information'>
                        <div className='pd-info-left'>
                            <h3>Drug Name</h3>

                            <form className='d-flex'>
                            <label>
                                Drug name:
                                <input
                                type="text"
                                name="aspirin"
                                // value={formData.name || ''}
                                // onChange={handleChange}
                                placeholder='ASPIRIN'
                                required
                                />
                            </label>
                            <label>
                                Dosage:
                                <input
                                type="text"
                                name="dosage"
                                // value={formData.name || ''}
                                // onChange={handleChange}
                                placeholder='2'
                                required
                                />
                            </label>     
                            </form>
                        </div>

                        <div className='pd-info-centre'>
                            <h3>Drug interactive information</h3>

                            <form>
                            <label>
                                <input
                                type="text"
                                name="restrictions"
                                // value={formData.name || ''}
                                // onChange={handleChange}
                                placeholder='Cannot take with amylase'
                                required
                                />
                            </label>
                            <label>
                                <input
                                type="text"
                                name="restrictions"
                                // value={formData.name || ''}
                                // onChange={handleChange}
                                placeholder='Cannot take with beverage'
                                required
                                />
                            </label>
                            </form>
                        </div>

                        <div className='pd-info-right'>
                            <button>Reset drug one</button>
                            <button>Reset drug two</button>
                            <button>Reset drug three</button>
                        </div>
                    </div>

                    <div className='drug-information'>
                        <div className='drug-infor-left'>
                            <table>
                                <tr>
                                    <th>Drug name</th>
                                    <th>Quantity</th>
                                    <th>Drug type</th>
                                    <th>Unit price</th>
                                    <th>Unit total</th>
                                </tr>
                                <tr>
                                    <td>ASPIRIN</td>
                                    <td>2</td>
                                    <td>generic</td>
                                    <td>30</td>
                                    <td>60</td>
                                </tr>
                                <tr>
                                    <td>CEPHALEXIN</td>
                                    <td>3</td>
                                    <td>brand</td>
                                    <td>50</td>
                                    <td>150</td>
                                </tr>
                            </table>
                        </div>

                        <div className='drug-infor-right'>
                            <button>Ok</button>
                            <button>Cancel</button>
                        </div>
                    </div>

                    <div className='total'>
                        <button>Total:</button>
                        <h4>210</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;