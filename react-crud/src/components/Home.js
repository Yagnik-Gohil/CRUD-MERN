import React, { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { UilEye, UilEdit, UilTrash } from '@iconscout/react-unicons'


function Home() {

    const [userData, setUserData] = useState([]);

    const getData = async (e) => {


        const response = await fetch("/getusers",{
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
            getData()
        }
    }
    
  return (
    <Fragment>

        <div className="row m-5 bg-dark rounded">
            <div className="col-md-12 px-3 pt-3 d-flex">
                <h4 className="m-0">Contact List</h4>
                <Link type="button" to="/addcontact" className="btn btn-white ms-auto">Add Contact</Link>
            </div>
            <div className="col-md-12 p-3">

                <table className="table table-light table-hover m-0">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Technology</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userData.map((user,id)=>{
                                return(
                                    <tr key={id}>
                                        <th scope="row">{id+1}</th>
                                        <td>{user.firstname} {user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contactnumber}</td>
                                        <td>{user.technology}</td>
                                        <td><Link to={`/viewcontact/${user._id}`} className="text-black hover-grey"><UilEye className="text-black hover-grey"></UilEye></Link> &nbsp; <Link to={`/editcontact/${user._id}`} className="text-black hover-grey"><UilEdit></UilEdit></Link> &nbsp; <UilTrash onClick={() => {deleteUser(user._id)}} className="text-black hover-grey"></UilTrash></td>
                                    </tr>
                                )
                            })
                        }
                        
                        
                    </tbody>
                </table>

            </div>

        </div>

    </Fragment>
  )
}

export default Home