import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PwdReset from "./pages/auth/Pwd-reset";
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "./assets/css/cabinet-grotesk.css";
import TestHome from "./pages/TestHome";
import Dashboard from "./pages/Dashboard";
import UseSidebar from "./components/general/UseSidebar";
import Pastpaper from "./pages/Pastpaper";
import Home from "./pages/Home";
function App() {
	return (
		<div className="max-w-screen h-screen bg-[#0A0A0A] text-white font-CabinetGrotesk-Regular">
			<Routes>
				<Route path="" Component={Home} />
				<Route path="/test" Component={TestHome} />
				<Route path="/register" Component={Register} />
				<Route path="/login" Component={Login} />
				<Route path="/reset" Component={PwdReset} />
				<Route path="/dashboard" Component={UseSidebar}>
					<Route path="" Component={Dashboard} />
					<Route path="pastpaper" Component={Pastpaper} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
