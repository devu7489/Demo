import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../component/DashBoard';
import ApplyJob from '../component/ApplyJob';
import Jobs from '../component/Jobs';
import JobRequests from '../component/JobRequests';
import ErrorPage from '../component/ErrorPage';
import { NavLink } from 'react-router-dom';

const Router = () => (
	<BrowserRouter>
	<div className='row' style={{'height':'100vh'}}>
				<div className='col-2 bg-light text-left'>
					<NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
					<br/>
            		<NavLink to='/jobRequests' activeClassName='activeNav'>All Job Requests</NavLink>
					<br/>
            		<NavLink to='/jobs' activeClassName='activeNav'>All Jobs</NavLink>
				</div>
				<div className='col-10'>
					<Switch>
	        			<Route path="/" component={DashBoard} exact={true} />
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

export default Router;