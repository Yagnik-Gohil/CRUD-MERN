import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UilTimesSquare } from '@iconscout/react-unicons'

function AddContact() {

    const navigate = useNavigate();

    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        technology: ""
    });

    const handleInput = (e) => {
        const {name, value} = e.target
        setDetails((old) => {
            return{
                ...old,
                [name]:value
            }
        })
    }

    const submitData = async (e) => {

        e.preventDefault();
        const {firstname,lastname,email,contactnumber,technology} = details;

        const response = await fetch("/addcontact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname,lastname,email,contactnumber,technology
            })
        });

        const data = await response.json();

        if(response.status === 422 || !data){
            alert(data)
        }else{
            alert("Data Added Successfully.")
            navigate("/");
        }
        
    }

  return (
    <Fragment>

        <div className="row m-5 p-5 bg-dark rounded">

            <div className="col-md-12 d-flex">
                <h4>Enter Contact Details</h4>
                <Link to="/" className="ms-auto text-white hover-grey"><UilTimesSquare></UilTimesSquare></Link>
            </div>

            <hr></hr>

            <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="firstname" className="form-control" avalue={details.firstname} onChange={handleInput}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastname" className="form-control" avalue={details.lastname} onChange={handleInput}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" avalue={details.email} onChange={handleInput}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input type="number" name="contactnumber" className="form-control" avalue={details.contactnumber} onChange={handleInput}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Technology</label>
                <input type="text" name="technology" className="form-control" avalue={details.technology} onChange={handleInput}/>
            </div>
            
            <div className="col-md-12">
                <hr></hr>
                <button type="submit" className="btn btn-white" onClick={submitData}>Submit</button>
            </div>
            
        </div>

    </Fragment>
  )
}

export default AddContact