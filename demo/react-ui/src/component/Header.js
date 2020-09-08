import React,{Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/jobs';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
	loggedIn: state.jobs.loggedIn
});

const mapDispatchToProps = dispatch => ({
	logout:()=> dispatch(logout())
});

class Header extends Component{
	
	logout = () => {
		this.props.logout();
	}
	
	render(){
		const {loggedIn} = this.props;
		return(
			<div>
        
		<div className='row'>
			<div className='col-8'>
				<h2 className='text-left'>Job Portal</h2>
			</div>
			<div className='col-4 text-right'>
				{loggedIn?loggedIn.name:''}
				<button className='btn btn-sm btn-link' onClick={this.logout}>Sign Out</button>
			</div>
		</div>
    </div>
		)
	}
}
 

const headerWithRouter = withRouter(Header);
export default connect(mapStateToProps,mapDispatchToProps)(headerWithRouter);
