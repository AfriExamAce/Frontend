import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const UseSidebar = () => {
	return (
		<main className="flex flex-row h-full gap-4 sm:gap-8">
			<Sidebar />
			<section className="w-full bg-[#161616]">
				<Outlet />
			</section>
		</main>
	);
};

export default UseSidebar;
