import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const UseSidebar = () => {
	return (
		<main className="flex flex-row gap-16">
			<Sidebar />
			<section className="w-full bg-[#161616]">
				<Outlet />
			</section>
		</main>
	);
};

export default UseSidebar;
