import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
	test: {
		height: "90vh",
		width: "100%",
		zIndex: '-1',
		background: "black",
	}
})

class Pattern extends React.Component {
	componentDidMount() {
	  // Loading resources for home page animation.
	  let script = document.createElement("script");
	  script.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js";
	  document.body.appendChild(script);
  
	  script = document.createElement("script");
	  script.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js";
	  document.body.appendChild(script);
  
	  script = document.createElement("script");
	//   script.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js";
	  script.src = process.env.PUBLIC_URL + 'pattern.js';
	  document.body.appendChild(script);
	}

	render() {
		const { classes } = this.props;
		return(
			<div className={classes.test}>
				<div id="large-header">
					<canvas id="demo-canvas">
					</canvas>
				</div>
			</div>
		)
	}
}

export default withStyles(useStyles)(Pattern);