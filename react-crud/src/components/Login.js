import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <Fragment>

        <div className="row m-5 p-5 bg-dark rounded">

            <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
                <div>
                    <h1>Login to CRUD</h1>
                    <p className="small">
                        If you're new to this website, <Link to="/signup" className="text-white">Sign Up</Link> here
                    </p>
                </div>
            </div>
            <div className="col-md-6">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="btn btn-white">Login</button>
            </form>
            </div>

        </div>

    </Fragment>
  )
}

export default Login