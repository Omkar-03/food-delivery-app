import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5000/api/createuser/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });

        const json = await response.json()

        if (!json.success) {
            alert("Enter valid credentials !!!")
        } else {
            alert("Signup Successful !!!")
            navigate('/login')
        }

    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container p-4 rounded' style={{ margin: " 8rem 20rem", width: "50rem", backgroundColor: 'wheat' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-danger">Submit</button>
                    <Link to="/login" className='m-3 btn btn-success'>Already a User</Link>
                </form>
            </div >
        </>
    )
}
