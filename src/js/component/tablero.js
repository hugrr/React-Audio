import React from "react";

export default class Tablero extends React.Component {
	constructor() {
		super();
		this.state = {
			game: ["", "", "", "", "", "", "", "", ""],
			player: "true"
		};
	}
	// asignar valor al click
	clickGame(position) {
		let arr = this.state.game;
		arr[position] = "X";
		this.setState({
			game: arr
		});
	}
	render() {
		return (
			<table id="tab" border="5px">
				<tr>
					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>

					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>

					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>
				</tr>
				<tr>
					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>

					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>

					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>
				</tr>

				<tr>
					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>

					<td
						onClick={() => {
							this.clickGame(0);
						}}>
						{this.state.game[0]}{" "}
					</td>

					<td>x</td>
				</tr>
			</table>
		);
	}
}
