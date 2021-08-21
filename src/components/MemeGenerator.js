import React, { Component } from "react";
class MemeGenerator extends Component {
	constructor() {
		super();
		this.state = {
			topText: "",
			bottomText: "",
			randImg: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((response) => {
				const { memes } = response.data;
				console.log(memes[0]);
				this.setState({
					allMemeImgs: memes,
				});
			});
	}

	handleSubmit(event) {
		event.preventDefault();
		const rndIndex = Math.floor(
			Math.random() * this.state.allMemeImgs.length
		);
		const newImg = this.state.allMemeImgs[rndIndex].url;
		this.setState({
			randImg: newImg,
		});
	}

	/**
	 * Create a method that, when the "Gen" button is clicked, chooses one of the
	 * memes from our `allMemeImgs` array at random and makes it so that is the
	 * meme image that shows up in the bottom portion of our meme generator site
	 */

	render() {
		return (
			<div>
				<form className="meme-form" onSubmit={this.handleSubmit}>
					{/**
					 * Create 2 input fields, one for the topText and one for the bottomText
					 * Remember that these will be "controlled forms", so make sure to add
					 * all the attributes you'll need for that to work
					 */}
					<input
						placeholder="Top Text Here"
						value={this.state.topText}
						name="topText"
						onChange={this.handleChange}
					/>

					<input
						placeholder="Bottom Text Here"
						value={this.state.bottomText}
						name="bottomText"
						onChange={this.handleChange}
					/>

					<button>Gen</button>
				</form>
				<div className="meme">
					<img src={this.state.randImg} alt="" />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;
