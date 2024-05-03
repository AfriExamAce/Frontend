import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PwdReset from "./pages/auth/Pwd-reset";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Routes>
			<Route path="/register" Component={Register} />
			<Route path="/login" Component={Login} />
			<Route path="/reset" Component={PwdReset} />
		</Routes>
	);
}

export default App;
