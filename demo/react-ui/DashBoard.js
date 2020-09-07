import React,{Component} from 'react';
import {connect} from 'react-redux';
import {HorizontalBar} from 'react-chartjs-2';
import {getAllJobRequests} from '../actions/jobs';
import {withRouter} from 'react-router-dom';
 
const mapStateToProps = state => ({
	jobReqs: state.jobs.jobReqs
});

const mapDispatchToProps = dispatch => ({
	getAllJobRequests:()=> dispatch(getAllJobRequests())
});

class Dashboard extends Component {
	
	componentDidMount(){
		this.props.getAllJobRequests();
	}
	
	render(){
		
		const {jobReqs} = this.props;
		const occurences = jobReqs && jobReqs.reduce(function (r, row) {
    		r[row.jobDetailId] = ++r[row.jobDetailId] || 1;
    		return r;
		}, {});
		
		let labels = [];
		let data = [];
		
		occurences && Object.keys(occurences).map(function (key) {
			labels.push(key);
			data.push(occurences[key])
		});
		
		const state = {
    		labels: labels,
    		datasets: [
		      {
		        label: 'Job Requests',
		        backgroundColor: 'rgba(255,99,132,0.2)',
		        borderColor: 'rgba(255,99,132,1)',
		        borderWidth: 1,
		        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		        hoverBorderColor: 'rgba(255,99,132,1)',
		        data: data
		      }
    		]
}
	
		
		return(
			<div>
			<h5>Bar Chart for Job Applied against Job Id</h5>
            	{labels.length > 0 ?<HorizontalBar data={state} />:'' }
    		</div>
		);
	}
}
 
const dashboardWithRouter = withRouter(Dashboard);
export default connect(mapStateToProps,mapDispatchToProps)(dashboardWithRouter);