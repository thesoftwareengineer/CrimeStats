import {render} from 'react-dom'
import React from 'react'
import "./stylesheets/index.scss"
import {MAPS} from "./components/map.js"

window.React = React

render(
	<MAPS />,
	document.getElementById("react-container")
)