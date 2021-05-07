import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import Router from './routers/Router';
import Login from './component/Login';

const mapStateToProps = state => ({
	loggedIn: state.jobs.loggedIn
});

class App extends Component{
	
	render(){
		//Testing 
		const {loggedIn} = this.props;
		return(
			<div className="App">
				<div className='container'>
				{loggedIn && Object.keys(loggedIn).length !== 0?
				<React.Fragment>
					<Router/>
				</React.Fragment>
				:<Login/>}
				
				</div>
    		</div>
		)
	}
}


export default connect(mapStateToProps)(App);
