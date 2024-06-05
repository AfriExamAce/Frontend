import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<PrimeReactProvider>
			<BrowserRouter>
				<MathJaxContext>
					<App />
				</MathJaxContext>
			</BrowserRouter>
		</PrimeReactProvider>
	</React.StrictMode>
);
