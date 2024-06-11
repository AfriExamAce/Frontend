import Logo from "../../assets/logo.svg";

const Nav = () => {
	return (
		<nav className="flex justify-between items-center py-6 font-CabinetGrotesk-Medium">
			<img className="cursor-pointer" src={Logo} alt="AfriExamAce Logo" />

			<ul className="flex flex-row items-center gap-10 text-sm">
				<li className="cursor-pointer">Home</li>
				<li className="cursor-pointer">About Us</li>
				<li className="cursor-pointer">Contact Us</li>
			</ul>

			<section className="flex flex-row w-fit items-center gap-4 text-base">
				<button>Log In</button>

				<button className="bg-white px-5 py-[10px] text-black rounded-md">
					Subscribe
				</button>
			</section>
		</nav>
	);
};

export default Nav;
