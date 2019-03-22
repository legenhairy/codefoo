import React, { Component } from 'react';
import PostItem from './PostItem';
import './ContentView.css';

class ContentView extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	posts: [], /*store the ign posts in here*/
	  	images: {}
	  }
	}

	//fetch the data from the api in componentDidMount
	//normally, to fix the cors error, i would add cors package in a backend express server
	//since this is just frontend, just added cors anywhere heroku link 
	componentDidMount() {
	  this.fetchPosts();
	}

	fetchPosts() {
	  fetch(`https://cors-anywhere.herokuapp.com/https://ign-apis.herokuapp.com/content?startIndex=30&count=10`)
	  	.then(response => response.json())
	  	.then(data => this.setState({
	  		posts: data.data,
	  		images: data.data.thumbnails
	  	}))
	  	.catch(error => console.log(error)) 	
	}

	/*will create a post component for each element in the json array(which is placed into posts)*/
	render() {
	  return (
	  	<div className="content-container">
	  	{
	  	  this.state.posts.map ((item, value) => (
	  	  	<PostItem key={item.contentId} contentType={item.contentType} 
	  	  	imgUrls={item.thumbnails[1].url} headline={item.metadata.headline}/>
	  	  ))
	  	}	  
	   </div>
	  );
	}
}


export default ContentView;