import React, { Component } from 'react';
import './PostItem.css';

/**receive array of thumbnail images as props*/
const PostItem = ({contentType, imgUrls, headline }) => {
	return (
	  <div className='post-info'>
	  	<img id='postimage' alt='placeholder' src={imgUrls}/>	
	  	
	  	<div className='comment-number'>
	  		{contentType}
	  	</div>
	  	<div className='content-title'>
	  		{headline}
	  	</div>
	  </div>
	);
}


export default PostItem;
