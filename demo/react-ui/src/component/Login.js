import React, {Component} from 'react';
import {login} from '../actions/jobs';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const mapStateToProps = state => ({
	loggedIn: state.jobs.loggedIn
});

const mapDispatchToProps = dispatch => ({
	login:(user) => dispatch(login(user))
});

class Login extends Component{
	
	state={
		formData:{},
		errorMsg:''
		}
	
	handleFieldChange = (e) => {
		this.setState({formData:{...this.state.formData,[e.currentTarget.name]:e.currentTarget.value}});
	}
	
	login = (e) => {
		e.preventDefault();
		const {formData} = this.state;
		this.props.login(formData)
	}
	
	componentDidUpdate(prevProps){
		if(prevProps.loggedIn != this.props.loggedIn && !this.props.loggedIn){
			this.setState({errorMsg:'Incorrect User Name or Possword'})
		}
	}
	
	render(){
		const {formData, errorMsg} = this.state;
		return(
			<div className='container'>
				<h6>Please Enter Details to Login</h6>
				<hr/>
				<Form onSubmit={this.login}>
					<FormGroup row>
						<Label for="userName" sm={3}>User Name</Label>
						<Col sm={9}>
							<Input type="text" name="userName" id="userName"
							value={formData?formData.userName:''}
							required={true}
							onChange={this.handleFieldChange}/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="password" sm={3}>Password</Label>
						<Col sm={9}>
							<Input type="password" name="password" id="password"
							value={formData?formData.password:''}
							required={true}
							onChange={this.handleFieldChange}/>
						</Col>
					</FormGroup>
					
					<button className='btn btn-sm btn-light' type='submit'>Submit</button>
					<br/>
					{errorMsg}
				
				</Form>
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)