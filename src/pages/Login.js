import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from "primereact/button";
import { useHistory,Link } from 'react-router-dom';

function Login() {

	const history = useHistory();

	return(
		

		<div className="login-body">
			<div className="body-container">
				<div className="p-grid p-nogutter">
					<div className="p-col-12 p-lg-6 left-side">
						<img src="assets/layout/images/logo-dark.png" alt="apollo-layout" className="logo"/>
						<h1>Ballot Secure</h1>
						<p>
							Sign in to start your session
						</p>
					</div>
					<div className="p-col-12 p-lg-6 right-side">
						<div className="login-wrapper">
							<div className="login-container">
								<span className="title">Login</span>

								<div className="p-grid p-fluid">
									<div className="p-col-12">
										<InputText placeholder="Username"/>
									</div>
									<div className="p-col-12">
										<InputText type="password" placeholder="Password"/>
									</div>
									<div className="p-col-6">
										<Button label="Sign In" icon="pi pi-check" onClick={() => history.push('/datapanel')}/>
									</div>
									<div className="p-col-6 password-container">
										<a href="/#">Forgot Password?</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login