import Logo from "../../assets/logo.svg";

const Nav = () => {
	return (
		<nav className="flex justify-between items-center py-6 font-CabinetGrotesk-Medium">
			<img
				tabIndex={1}
				className="p-2 rounded-md hover:border-violet-500 focus:border-violet-500 border-2 border-transparent outline-none cursor-pointer"
				src={Logo}
				draggable="false"
				alt="AfriExamAce Logo"
			/>

			<ul className="flex flex-row items-center gap-10 text-sm">
				<li
					tabIndex={1}
					className="p-2 outline-none cursor-pointer underline-effect nav-focus_effect">
					Home <div></div>
				</li>
				<li
					tabIndex={1}
					className="p-2 outline-none cursor-pointer underline-effect nav-focus_effect">
					About Us <div></div>
				</li>
				<li
					tabIndex={1}
					className="p-2 outline-none cursor-pointer underline-effect nav-focus_effect">
					Contact Us <div></div>
				</li>
			</ul>

			<section className="flex flex-row w-fit items-center gap-4 text-base">
				<button className="border-2 border-transparent p-2 rounded-md hover:border-violet-500 focus:border-violet-300 outline-none">
					Log In
				</button>

				<button className="bg-white px-5 py-[10px] text-black rounded-md border-2 border-white hover:border-violet-500 focus:border-violet-500 outline-none">
					Subscribe
				</button>
			</section>
		</nav>
	);
};

export default Nav;
