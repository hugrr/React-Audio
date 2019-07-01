import React from "react";

export class Home extends React.Component {
	constructor(jugador1, jugador2) {
		super();
		this.jugador1 = "x";
		this.jugador2 = "o";
		this.state = null;
	}

	render() {
		return (
			<div>
				<table width="300px" height="300px" border="5px">
					<tr>
						<td />

						<td />

						<td />
					</tr>

					<tr>
						<td />

						<td />

						<td />
					</tr>

					<tr>
						<td />

						<td />

						<td />
					</tr>
				</table>
			</div>
		);
	}
}
