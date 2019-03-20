import React from 'react';
import './SelectionPanel.css';

const SelectionPanel = () => {
	return (
	  <div className="btn-group">
	  	<div className="button-panel">
	  	   <div className='latest-feed'>Latest</div>
	  	   <div className='videos'>Videos</div>
	  	   <div className='articles'>Articles</div>	
	  	</div>
	  </div>
	)
}

export default SelectionPanel;