import React from "react"
import SF from "./../mapSF.json"
import "./d3.js"

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
		<svg width="960" height="600" fill="none" stroke="#333">
		  <path id="municipalities" strokeWidth="0.2"></path>
		  <path id="states"></path>
		</svg>
	</div>

)
export const map = (
	<h1 id="title"
		className="map">
	{SF.cityName}
	</h1>
)