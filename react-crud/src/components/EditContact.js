import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { UilTimesSquare } from '@iconscout/react-unicons'

function EditContact() {
    
    useEffect(() => {
        getData()
    }, [])
    
    const navigate = useNavigate();

    const {id} = useParams();
    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        technology: ""
    });

    const getData = async (e) => {


        const response = await fetch(`/getuser/${id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if(response.status === 422 || !data){
            console.log("Data not available")
        }else{
            setDetails(data);
        }
        
    }
    const handleUpdate = (e) => {
        const {name, value} = e.target
        setDetails((old) => {
            return{
                ...old,
                [name]:value
            }
        })
    }

    const updateData = async (e) => {

        e.preventDefault();
        const {firstname,lastname,email,contactnumber,technology} = details;

        const response = await fetch(`/updatecontact/${id}`,{
            method: "PATCH",
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
            alert("Data Updated Successfully.")
            navigate("/");
        }
        
    }

  return (
    <Fragment>

        <div className="row m-5 p-5 bg-dark rounded">

            <div className="col-md-12 d-flex">
                <h4>Edit Contact Details</h4>
                <Link to="/" className="ms-auto text-white hover-grey"><UilTimesSquare></UilTimesSquare></Link>
            </div>

            <hr></hr>

            <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="firstname" className="form-control" value={details.firstname} onChange={handleUpdate}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" name="lastname" className="form-control" value={details.lastname} onChange={handleUpdate}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" value={details.email} onChange={handleUpdate} disabled/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input type="number" name="contactnumber" className="form-control" value={details.contactnumber} onChange={handleUpdate}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Technology</label>
                <input type="text" name="technology" className="form-control" value={details.technology} onChange={handleUpdate}/>
            </div>
            
            <div className="col-md-12">
                <hr></hr>
                <button type="submit" onClick={updateData} className="btn btn-white">Update</button>
            </div>
            
        </div>

    </Fragment>
  )
}

export default EditContact