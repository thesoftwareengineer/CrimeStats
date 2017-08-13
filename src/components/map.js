import React from "react"
import SF from "./../mapSF.json"

const neighborhoods = SF.neighborhoods

export const MAPS = () =>(

	<div className="map">
		<h1 id="title">
		HELLO {SF.cityName}
		</h1>
		<ul>
			{
				Object.keys(neighborhoods).map((key, index) =>(
				<li key={index}>{neighborhoods[key]}</li>
				))
			}
		</ul>
	</div>
)
export const map = (
	<h1 id="title"
		className="map">
	{SF.cityName}
	</h1>
)