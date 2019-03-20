import React from 'react';
import './SelectionPanel.css';

const SelectionPanel = () => {
	return (
	  <div class="btn-group">
	  	<button className='latest-feed'>Latest</button>
	  	<button className='videos'>Videos</button>
	  	<button className='articles'>Articles</button>	
	  </div>
	)
}

export default SelectionPanel;