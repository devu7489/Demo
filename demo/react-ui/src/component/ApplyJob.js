import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {submitJob} from '../actions/jobs';
import moment from 'moment';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	submitJob:(jobReq) => dispatch(submitJob(jobReq))
});

class ApplyJob extends Component {
	
	state={
		formData:this.props.location.state?
			{...this.props.location.state.jobReq}:
			{
				jobDetailId:this.props.match.params.jobId,
				status:'new',
				statusDesc:'New',
				appliedDate:moment()
			},
		updateStatus:this.props.location.state?true:false
		}
	
	handleFieldChange = (e) => {
		if('select-one' == e.currentTarget.type){
			const index = e.target.selectedIndex;
			const displayText = e.target[index].text;
			this.setState({formData:{
				...this.state.formData,
				[e.currentTarget.name]:e.currentTarget.value,
				[e.currentTarget.name+'Desc']:displayText
				}});
		}else{
			this.setState({formData:{...this.state.formData,[e.currentTarget.name]:e.currentTarget.value}});
		}
	}
	
	submitJobApplication = (e) => {
		e.preventDefault();
		this.props.submitJob(this.state.formData);
	};
	
	render(){
		const {formData,updateStatus} = this.state;
		return (
			<div>
			<h6>{updateStatus?'Please Update Condidate Status':
			'Please fill the below details for applying job'}</h6>
			<hr/>
			<Form onSubmit={this.submitJobApplication}>
				<FormGroup row>
					<Label for="jobDetailId" sm={3}>Job Id</Label>
					<Col sm={9} className='text-left'>
						{formData?formData.jobDetailId:''}
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="name" sm={3}>Full Name</Label>
					<Col sm={9}>
						<Input type="text" name="name" id="name"
						value={formData?formData.name:''}
						disabled={updateStatus}
						onChange={this.handleFieldChange}/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="address" sm={3}>Address</Label>
					<Col sm={9}>
						<Input type="text" name="address" id="address" 
						value={formData?formData.address:''}
						disabled={updateStatus}
						onChange={this.handleFieldChange}/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="phone" sm={3}>Phone</Label>
					<Col sm={9}>
						<Input type="text" name="phone" id="phone" 
						value={formData?formData.phone:''}
						disabled={updateStatus}
						onChange={this.handleFieldChange}/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="email" sm={3}>Email</Label>
					<Col sm={9}>
						<Input type="text" name="email" id="email" 
						value={formData?formData.email:''}
						disabled={updateStatus}
						onChange={this.handleFieldChange}/>
					</Col>
				</FormGroup>
				{updateStatus?
				<React.Fragment>
					<FormGroup row>
						<Label for="appliedDate" sm={3}>Applied Date</Label>
						<Col sm={9}>
							<Input type="text" name="appliedDate" id="appliedDate" 
							value={formData?moment(formData.appliedDate).format('DD-MMM-YYYY'):''}
							disabled={updateStatus}
							onChange={this.handleFieldChange}/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="status" sm={3}>Status</Label>
						<Col sm={9}>
							<Input type="select" name="status" id="status" 
							value={formData?formData.status:''}
							onChange={this.handleFieldChange}>
		            			<option value='new'>New</option>
		            			<option value='interview'>Interview In-Progress</option>
		            			<option value='postInterview'>Post Interview</option>
		            			<option value='offered'>Offer Released</option>
		            			<option value='rejected'>Rejected</option>
							</Input>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="comment" sm={3}>Comment</Label>
						<Col sm={9}>
							<Input type="textarea" name="comment" id="comment" 
							value={formData?formData.comment:''}
							onChange={this.handleFieldChange}/>
						</Col>
					</FormGroup>
					</React.Fragment>
				:''}
				<div className='row'>
				<div className='col-12 text-left'>
					<button className='btn btn-sm btn-light' type='submit'>Submit</button>
					{' '}
					<button className='btn btn-sm btn-light' type='button'>Cancel</button>
				</div>
			</div>
			</Form>
		</div>
		);
	}
}

const applyJobWithRouter = withRouter(ApplyJob); 
export default connect(mapStateToProps, mapDispatchToProps)(applyJobWithRouter);