import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import DashBoard from '../component/DashBoard';
import ApplyJob from '../component/ApplyJob';
import Jobs from '../component/Jobs';
import JobRequests from '../component/JobRequests';
import ErrorPage from '../component/ErrorPage';
import Header from '../component/Header';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
	loggedIn: state.jobs.loggedIn
});

const Router = (props) => (
	<BrowserRouter>
	<Header/>
	<hr/>
	<div className='row' style={{'height':'100vh'}}>
				<div className='col-2 bg-light text-left'>
				{
					props.loggedIn && props.loggedIn.role === 'admin'?
					<React.Fragment>
						<NavLink to='/dashboard' activeClassName='activeNav'>Dashboard</NavLink>
						<br/>
	            		<NavLink to='/jobRequests' activeClassName='activeNav'>All Job Requests</NavLink>
						<br/>
					</React.Fragment>
					:<NavLink to='/jobs' activeClassName='activeNav'>All Jobs</NavLink>
				}
				</div>
				<div className='col-10'>
					<Switch>
					{
					props.loggedIn && props.loggedIn.role === 'admin'?
					<Route path="/" exact={true} render={()=>(<Redirect to='/dashboard'/>)}/> 
					&& <Route path="/jobs" render={()=>(<Redirect to='/dashboard'/>)}/>:
					<Route path="/" exact={true} render={()=>(<Redirect to='/jobs'/>)}/>
					&& <Route path="/dashboard"  render={()=>(<Redirect to='/jobs'/>)}/>
					&& <Route path="/jobRequests" render={()=>(<Redirect to='/jobs'/>)}/>
					}
						<Route path="/dashboard" component={DashBoard}/>
	        			<Route path="/jobs" component={Jobs} />
						<Route path="/jobRequests" component={JobRequests} />
	        			<Route path="/applyJob/:jobId" component={ApplyJob} />
						<Route path="/applyJob" component={ApplyJob} />
	        			<Route component={ErrorPage} />
	    			</Switch>
				</div>
			</div>
		
	</BrowserRouter>
);

export default connect(mapStateToProps)(Router);