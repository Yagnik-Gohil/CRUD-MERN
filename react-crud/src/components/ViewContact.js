import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { UilEnvelope, UilPhone, UilArrow, UilArrowCircleLeft, UilEdit, UilTrash, UilUserCircle } from '@iconscout/react-unicons'
import { UilHtml5, UilCss3Simple, UilJavaScript, UilReact, UilVuejs } from '@iconscout/react-unicons'

function ViewContact() {

    const [userData, setUserData] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    
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
            setUserData(data);
        }
        
    }

    function Icon(name) {
        
        if(name && name.toLowerCase().includes("react"))
            return(<UilReact size="100"></UilReact>)
        
        else if(name && name.toLowerCase().includes("html"))
            return(<UilHtml5 size="100"></UilHtml5>)
        
        else if(name && name.toLowerCase().includes("css"))
            return(<UilCss3Simple size="100"></UilCss3Simple>)
        
        else if(name && name.toLowerCase().includes("javascript"))
            return(<UilJavaScript size="100"></UilJavaScript>)
        
        else if(name && name.toLowerCase().includes("vue"))
            return(<UilVuejs size="100"></UilVuejs>)
        
        else
            return(<UilUserCircle size="100"></UilUserCircle>)
        
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteUser = async (id) =>{

        const response = await fetch(`/deletecontact/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if(response.status === 422 || !data){
            console.log("Data not available")
        }else{
            alert("Record Deleted Successfully.")
            navigate("/");
        }
    }

  return (
    <Fragment>

        <div className="row m-5 p-5 bg-dark rounded">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
                <div>
                    {Icon(userData.technology)}
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                    <h4>{userData.firstname} {userData.lastname}</h4>
                    <p>
                        <UilEnvelope></UilEnvelope> {userData.email} <br></br>
                        <UilPhone></UilPhone> {userData.contactnumber} <br></br>
                        <UilArrow></UilArrow> {userData.technology} <br></br>
                    </p>
                    
                </div>
            </div>
            <div className="col-md-3 d-flex align-items-center">
                <div className="ms-auto">
                    <Link to="/" className="text-white hover-grey"><UilArrowCircleLeft ></UilArrowCircleLeft></Link> &nbsp;
                    <Link to={`/editcontact/${userData._id}`} className="text-white hover-grey"><UilEdit></UilEdit></Link> &nbsp;
                    <UilTrash onClick={() => {deleteUser(userData._id)}} className="text-white hover-grey"></UilTrash> &nbsp;
                </div>
            </div>
        </div>

    </Fragment>
  )
}

export default ViewContact