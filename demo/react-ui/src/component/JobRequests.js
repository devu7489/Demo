import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllJobRequests,getJobReqHistory} from '../actions/jobs';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import {withRouter} from 'react-router-dom';
import {Modal, ModalBody} from 'reactstrap';
import JobRequestHistory from './JobRequestHistory';

const mapStateToProps = state => ({
	jobReqs: state.jobs.jobReqs,
	jobReqHistory: state.jobs.jobReqHistory
});

const mapDispatchToProps = dispatch => ({
	getAllJobRequests:()=> dispatch(getAllJobRequests()),
	getJobReqHistory:(jobReqId)=> dispatch(getJobReqHistory(jobReqId))
});

class JobRequests extends Component {
	
	state = {}
	
	componentDidMount(){
		this.props.getAllJobRequests();
	}
	
	changeJobReqStatus = (row) => {
		this.props.history.push(
		{
			pathname: '/applyJob',
			state: { jobReq: row }
		})
	}
	
	openHistory = (row) => {
		this.props.getJobReqHistory(row.id)
		this.setState({openStatusHistory:true})
	}
	
	toggle = () => {
		this.setState({openStatusHistory:false})
	}
	
	render(){
		
		const {jobReqs,jobReqHistory} = this.props;
		const {openStatusHistory} = this.state;
		
		const columns = [
			  {
			    name: 'Job Id',
			    selector: 'jobDetailId',
			    sortable: true
			  },
			  {
			    name: 'Full Name',
			    selector: 'name',
			    sortable: true,
			  },
				{
			    name: 'Address',
			    selector: 'address',
			    sortable: true,
				wrap:true
			  },
				{
			    name: 'Email',
			    selector: 'email',
			    sortable: true,
			  },
				{
			    name: 'Phone No.',
			    selector: 'phone',
			    sortable: true,
			  },
				{
			    name: 'Job Application Status',
			    selector: 'statusDesc',
			    sortable: true,
				cell: row => <button className='btn btn-sm btn-link' onClick={() => this.changeJobReqStatus(row)}>{row.statusDesc}</button>,
			  },
				{
			    name: 'Find Status History',
			    selector: 'history',
			    sortable: true,
				cell: row => <button className='btn btn-sm btn-link' onClick={() => this.openHistory(row)}>History</button>,
			  },
			  {
			    name: 'Applied Date',
			    selector: 'appliedDate',
			    sortable: true,
				cell: row => moment(row.appliedDate).format('DD-MMM-YYYY')
			  }
		];
		
		return(
			<div>
			<DataTable
        			title="Job Requests"
					striped={true}
        			columns={columns}
        			data={jobReqs}
      			/>
			<Modal size='xl' isOpen={openStatusHistory}>
		        <ModalBody>
         			 <h6>Job Request History</h6>
					 <hr/>
					 <JobRequestHistory jobReqsHistory={jobReqHistory}/>
					 <br/>
					 <button className='btn btn-light btn-sm' onClick={this.toggle}>Cancel</button>
        		</ModalBody>
      		</Modal>
			</div>
		)
	}
}

const JobReqWithRouter = withRouter(JobRequests);
export default connect(mapStateToProps,mapDispatchToProps)(JobReqWithRouter);