import { useEffect, useState } from "react";
import UseFetch from "../components/general/UseFetch";

const Dashboard = () => {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		(async () => {
			const { data } = await UseFetch({
				url: "auth/me",
				options: {
					method: "GET",
					useServerUrl: true,
					handleError: true,
					returnResponse: true,
				},
			});

			console.log(data);
			setUserData(data.data);
		})();
	});

	useEffect(() => {
		console.log(userData);
	}, [userData]);

	return (
		<div className="flex flex-row w-full h-full">
			<div className="w-full py-8 sm:pr-12 sm:pl-4 pr-4">
				<header className="flex flex-row justify-between">
					<h2 className="font-light text-3xl md:text-4xl">
						My Courses
					</h2>
					<div className="text-[#D02C2E] bg-white p-2 rounded-full cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={3}
							stroke="currentColor"
							className="w-7 h-7">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</div>
				</header>

				<main className="mt-16">
					<article className="w-full rounded-3xl bg-[#282828] flex flex-col md:flex-row">
						<div className="px-2 sm:px-4 py-3">
							<img
								src="https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
								className="md:w-[250px] md:pr-0 md:h-[180px] sm:h-[250px] w-full object-cover aspect-auto rounded-3xl"
							/>
						</div>
						<section className="w-full px-4 py-4 flex flex-col justify-between">
							<div className="flex flex-row justify-between items-center">
								<div className="flex flex-col gap-1">
									<h4 className="font-medium text-2xl cursor-pointer">
										Physics 101
									</h4>
									<span className="font-light text-base text-neutral-200 cursor-pointer">
										NECO
									</span>
								</div>
								<button className="bg-[#D02C2E] rounded-full p-3 cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6">
										<path
											fillRule="evenodd"
											d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
							<div>
								<progress
									className="w-full md:mt-0 mt-6 h-[11px] rounded-sm [&::-webkit-progress-bar]:bg-[#212121] [&::-webkit-progress-value]:bg-[#3A3A3A] [&::-webkit-progress-value]:rounded-r-sm [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-500"
									value={50}
									max={100}></progress>
								<p className="text-xs text-gray-300">
									75% completed
								</p>
							</div>
						</section>
					</article>
				</main>
			</div>
			<aside className="w-full h-full hidden 2xl:flex max-w-[600px] bg-[#282828] px-6 pt-16 flex-col justify-between pb-6">
				<div>
					<img
						src="https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						className="rounded-3xl h-[300px] w-full object-cover"
					/>

					<div className="mt-12">
						<div className="flex flex-col gap-1">
							<h4 className="font-medium text-2xl cursor-pointer">
								Physics 101
							</h4>
							<span className="font-light text-base text-neutral-200 cursor-pointer">
								NECO
							</span>
						</div>
						<div className="mt-6">
							<p>
								<span>TIME</span> 45m
							</p>
							<p>
								<span>STAR</span> 4.5/5.0
							</p>
						</div>

						<div className="mt-6">
							<h5 className="text-lg font-medium">
								Course Overview
							</h5>
							<p className="text-sm font-light text-neutral-200">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Beatae ipsa aliquam sint alias
								dolor, officia reiciendis aspernatur assumenda!
								Accusantium impedit illo consequatur
								reprehenderit laborum modi, atque sapiente
								ipsam. Excepturi, mollitia! Lorem ipsum dolor
								sit amet consectetur adipisicing elit. Eum
								blanditiis doloremque dolorum?
							</p>
						</div>
					</div>
				</div>

				<div className="flex flx-row justify-center gap-6">
					<button className="flex-1 bg-white text-black rounded-3xl py-2 font-medium">
						View topics
					</button>
					<button className="flex-1 bg-[#D02C2E] text-white rounded-3xl py-2 font-medium">
						Continue
					</button>
				</div>
			</aside>
		</div>
	);
};

export default Dashboard;
