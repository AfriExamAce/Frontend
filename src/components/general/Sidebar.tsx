import { useEffect, useState } from "react";
import profile_picture from "../../assets/main_profile-picture.png";

const sidebar_background = "#282828";
const px_required_to_collapse = 1000;
const Sidebar = () => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true);
	const [width, setWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (width < px_required_to_collapse && isExpanded) {
			setIsExpanded(false);
			localStorage.setItem("expandOnResize", "true");
		}
		if (!isExpanded && width > px_required_to_collapse) {
			console.log(localStorage.getItem("expandOnResize"));
			if (localStorage.getItem("expandOnResize") === "true") {
				setIsExpanded(true);
				localStorage.removeItem("expandOnResize");
			}
		}
	}, [width]);

	return (
		<aside
			className={`flex flex-col h-full py-8 w-full ${
				isExpanded ? "max-w-[350px]" : "max-w-fit"
			} px-1 sm:px-6 bg-[${sidebar_background}]`}>
			<div className="flex flex-col gap-9 w-full h-full">
				{!isExpanded && (
					<img
						src={profile_picture}
						className="w-[48px] sm:w-[80px] mx-auto aspect-auto rounded-full cursor-pointer"
						alt=""
						tabIndex={1}
					/>
				)}
				{isExpanded && (
					<header className="flex flex-row gap-4 items-center bg-[#161616] px-4 py-2 rounded-full w-full cursor-default">
						<img
							tabIndex={1}
							src={profile_picture}
							className="w-[75px] mx-auto aspect-auto rounded-full cursor-pointer"
							alt=""
						/>
						<div className="w-full">
							<h2 className="font-semibold text-xl cursor-pointer">
								John Doe
							</h2>
							<div className="flex flex-row gap-1 font-light text-sm">
								<span>WAEC</span>|<span>NECO</span>|
								<span>JAMB</span>
							</div>
						</div>
					</header>
				)}
				<ul className="text-white list-none flex flex-col gap-3 items-center">
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[#161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-7 h-7">
							<path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
						</svg>
						{isExpanded && <p>User Progress</p>}
					</li>
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-7 h-7">
							<path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
							<path
								fillRule="evenodd"
								d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
								clipRule="evenodd"
							/>
						</svg>
						{isExpanded && <p>Quizzes</p>}
					</li>
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-7 h-7">
							<path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clipRule="evenodd"
							/>
						</svg>
						{isExpanded && <p>Flashcards</p>}
					</li>
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-7 h-7">
							<path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
						</svg>
						{isExpanded && <p>Recommended</p>}
					</li>
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-7 h-7">
							<path
								fillRule="evenodd"
								d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
								clipRule="evenodd"
							/>
							<path
								fillRule="evenodd"
								d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
								clipRule="evenodd"
							/>
						</svg>
						{isExpanded && <p>Explore</p>}
					</li>
				</ul>
			</div>
			<footer className="">
				<div className="w-full h-[1px] bg-[#4F4F4F] mb-6"></div>
				<ul className="flex flex-col items-center gap-1">
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
								clipRule="evenodd"
							/>
						</svg>
						{isExpanded && <p>Settings</p>}
					</li>
					<li
						tabIndex={1}
						className={`flex flex-row gap-3 items-center text-sm justify-start cursor-pointer font-medium bg-[161616] px-4 py-3 rounded-3xl ${
							isExpanded ? "w-full" : "w-fit"
						}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
								clipRule="evenodd"
							/>
						</svg>
						{isExpanded && <p>Sign out</p>}
					</li>
				</ul>
			</footer>
		</aside>
	);
};

export default Sidebar;
