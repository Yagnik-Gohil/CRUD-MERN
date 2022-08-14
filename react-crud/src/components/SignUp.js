import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Fragment>

        <div className="row m-5 p-5 bg-dark rounded">

            <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
                <div>
                    <h1>Sign Up to CRUD</h1>
                    <p className="small">
                        Already have an account? <Link to="/login" className="text-white">Login</Link> here
                    </p>
                </div>
            </div>
            <div className="col-md-6">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2"/>
                </div>
                <button type="submit" class="btn btn-white">Sign Up</button>
            </form>
            </div>

        </div>

    </Fragment>
  )
}

export default SignUp