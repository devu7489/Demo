import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllJobs} from '../actions/jobs';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
	jobs: state.jobs.allJobs
});

const mapDispatchToProps = dispatch => ({
	getAllJobs:()=> dispatch(getAllJobs())
});


class Jobs extends Component{
	
	componentDidMount(){
		this.props.getAllJobs();
	}
	
	openJob = (row) => {
		this.props.history.push('/applyJob/'+row.jobId)
	}
	
	render(){
		
		const {jobs} = this.props;
		
		const columns = [
			  {
			    name: 'Job Id',
			    selector: 'jobId',
			    sortable: true,
				cell: row => <button className='btn btn-sm btn-link' onClick={() => this.openJob(row)}>{row.jobId}</button>,
			  },
			  {
			    name: 'Job Name',
			    selector: 'jobName',
			    sortable: true,
			  },
			  {
			    name: 'Job Post Date',
			    selector: 'jobPostDate',
			    sortable: true,
				cell: row => moment(row.jobPostDate).format('DD-MMM-YYYY')
			  },
			  {
			    name: 'Job Status',
			    selector: 'status',
			    sortable: true,
			  }
		];
		
		return(
			<div>
				<DataTable
        			title="Job Details"
					striped={true}
        			columns={columns}
        			data={jobs}
      			/>
    		</div>
		);
	}
}

const jobsWithRouter = withRouter(Jobs);
export default connect(mapStateToProps,mapDispatchToProps)(jobsWithRouter);