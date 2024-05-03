import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<PrimeReactProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PrimeReactProvider>
	</React.StrictMode>
);
