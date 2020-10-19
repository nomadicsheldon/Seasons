import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Functional component
// const App = () => {
// 	// getting current location
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(err) => console.log(err),
// 	);
// 	//

// 	return <div>Latitude: </div>;
// };

// class based component
class App extends React.Component {
	// call when App is initialized
	// constructor(props) {
	// 	super(props);
	// 	this.state = { lat: null, errorMsg: "" };
	// }
	state = { lat: null, errorMsg: "" };

	componentDidMount() {
		console.log("componentDidMount");
		// getting current location
		window.navigator.geolocation.getCurrentPosition(
			// update using setState
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMsg: err.message }),
		);
		//
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	// Helper method
	renderContent() {
		if (this.state.errorMsg && !this.state.lat) {
			return <div>{this.state.errorMsg}</div>;
		}

		if (!this.state.errorMsg && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request!" />;
	}

	// React says we have to define render, it will call several times
	render() {
		return <div className="border-red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
