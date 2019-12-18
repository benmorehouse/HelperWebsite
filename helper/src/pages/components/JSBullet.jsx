import React from 'react';

class JSBullet extends React.Component{
	render(){
		return(
			<div class="JSBullet">
				<img src={this.props.source} alt=""/>
			</div>
		);
	}
}

export default JSBullet;
