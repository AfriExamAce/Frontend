import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PwdReset from "./pages/auth/Pwd-reset";
import "primeicons/primeicons.css";

function App() {
	return (
		<div className="w-screen h-screen bg-neutral-900 text-white">
			<Routes>
				<Route path="/register" Component={Register} />
				<Route path="/login" Component={Login} />
				<Route path="/reset" Component={PwdReset} />
			</Routes>
		</div>
	);
}

export default App;
