import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"
import App from "./App"

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.querySelector("#root")
)
