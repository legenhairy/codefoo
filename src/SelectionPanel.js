import React, { Component } from 'react';
import './SelectionPanel.css';

class SelectionPanel extends Component {
	constructor(props) {
	  super(props);	
	  this.state = {
      	showVideos: false,
      	showLatest: true /*by default, we will have the latest feed toggle on*/
     }
	}

	render(){	
	  return (
		<div className="div-container">
		  <div className='latest-feed'>Latest</div>
		  <div className='videos'>Videos</div>
		  <div className='articles'>Articles</div>	
		</div>
		)
   }
}

export default SelectionPanel;