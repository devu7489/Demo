import React from 'react';
import './App.css';
import Router from './routers/Router';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
		<div className='container'>
			<Header />
			<hr/>
			<Router/>
		</div>
    </div>
  );
}

export default App;
