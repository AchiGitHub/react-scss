import React, { Component } from 'react'


export class LoginBootstrap extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-container" >
                            <div className="card-header"><h3>Guest Wi-Fi</h3></div>
                            <form className="form-signin">
                                <span id="reauth-email" className="reauth-email"></span>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                <div id="remember" className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                            </form>
                            <a href="#" className="forgot-password">
                                Forgot the password?
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginBootstrap