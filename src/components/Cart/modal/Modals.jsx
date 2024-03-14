import React, { useState } from 'react';
import "./Modal.scss";
import { Button, Modal } from 'bootstrap';
import { useNavigate } from 'react-router-dom';


const Modals = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        address: ""
    })
    const inputHandler = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        alert("Submit")
        navigate("/")
    }
    return (
        <div
            className="modal show "
            style={{ display: 'block', position: 'initial' }}
        >
            <div className=' d-flex justify-content-center my-5'>
                <div class="col-sm-6">
                    <div class="card shadow p-3 mb-5 bg-body rounded">
                        <div class="card-body">
                            <form onSubmit={submitHandler}>
                            <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="name" placeholder="Name" name='name' value={user.name} onChange={inputHandler}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" placeholder="Email" name='email' value={user.email} onChange={inputHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Number</label>
                                    <input type="number" placeholder="Mobile Number" name='number' value={user.number} onChange={inputHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Address</label>
                                    <input type="text" placeholder="Address" name='address' value={user.address} onChange={inputHandler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>

                {/* <form onSubmit={submitHandler} className="d-flex">
                    <input type="name" placeholder="Name" name='name' value={user.name} onChange={inputHandler} />
                    <input type="email" placeholder="Email" name='email' value={user.email} onChange={inputHandler} />

                    <input type="number" placeholder="Mobile Number" name='number' value={user.number} onChange={inputHandler} />

                    <input type="text" placeholder="Address" name='address' value={user.address} onChange={inputHandler} />
                    <button type="submit">Subscribe</button>
                </form> */}
            </div>
        </div>
    )
}

export default Modals