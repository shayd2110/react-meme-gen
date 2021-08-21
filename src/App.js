/*eslint-disable */
import React, { Component, useState, useEffect } from "react";
import MemeHeader from "./components/MemeHeader";
import MemeGenerator from "./components/MemeGenerator";

//#region MEME Generator
class App extends React.Component {
	render() {
		return (
			<div>
				<MemeHeader />
				<MemeGenerator />
			</div>
		);
	}
}
//#endregion
export default App;
