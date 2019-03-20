import React, { Component } from 'react';
import './ContentView.css';

class ContentView extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	posts: [] /*store the ign posts in here*/
	  }
	}

	//fetch the data from the api in componentDidMount
	//normally, to fix the cors error, i would add cors package in a backend express server
	//since this is just frontend, just added cors anywhere heroku link 
	componentDidMount() {
	  fetch(`https://cors-anywhere.herokuapp.com/https://ign-apis.herokuapp.com/content?startIndex=30&count=10`)
	  	.then(response => response.json())
	  	.then(data => console.log(data))
	}


	render() {
	  return (
	  	<div className="container">
	  	  <img alt="icon here" src= "" />
	  	  <div>placeholder title</div>
	    </div>
	  )
	}


}


export default ContentView;