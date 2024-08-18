import Nav from "../components/general/Nav";
import Desktop from "../assets/Desktop - 33.svg";
import Icon_logo from "../assets/icon-logo.svg";
import stars from "../assets/stars.svg";
// import { useEffect, useState } from "react";
import Frame1 from "../assets/homepage/Frame 1.png";
import Frame2 from "../assets/homepage/Frame 2.png";
import FrameLeaderboard from "../assets/homepage/Frame Leaderboard.png";
import FrameTask from "../assets/homepage/Frame Task.png";

const Home = () => {
	// const [cursor, setCusor] = useState({ x: 0, y: 0, clicked: false });

	// useEffect(() => {
	// 	document.addEventListener("mousemove", (e) => {
	// 		setCusor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
	// 	});

	// 	document.addEventListener("mousedown", () => {
	// 		setCusor((prev) => ({ ...prev, clicked: true }));
	// 	});

	// 	document.addEventListener("mouseup", () => {
	// 		setCusor((prev) => ({ ...prev, clicked: false }));
	// 	});
	// }, []);

	return (
		// <div className="overflow-y-auto w-full h-full !cursor-none custom-scrollbar">
		<div className="overflow-y-auto w-full h-full custom-scrollbar">
			{/* <div
				onClick={() => console.log(cursor)}
				style={{
					top: cursor.y + "px",
					left: cursor.x + "px",
					scale: cursor.clicked ? "150%" : "100%",
				}}
				className={`w-8 h-8 rounded-full bg-green-600 fixed z-50`}></div> */}
			<div className="px-24 max-w-screen-2xl overflow-hidden mx-auto">
				<Nav />
				<header className="w-full bg-[#141414] text-center h-[556px] rounded-[40px] overflow-hidden font-CabinetGrotesk-Medium flex flex-col items-center py-20 mt-12 relative">
					<div>
						<p className="bg-[#D9D9D9] px-8 py-3 rounded-[40px] text-xl text-black font-CabinetGrotesk-Bold -rotate-45 absolute bottom-10 left-0">
							QUALIFY
						</p>
						<p className="bg-[#4185F4] px-8 py-3 rounded-[40px] text-xl text-black font-CabinetGrotesk-Bold -rotate-12 absolute bottom-20 left-36">
							SUCCESS
						</p>
						<p className="bg-[#FB6F3C] px-8 py-3 rounded-[40px] text-xl text-black font-CabinetGrotesk-Bold rotate-[25deg] absolute bottom-48 left-10">
							PROGRESS
						</p>
						<svg
							width="60"
							height="75"
							viewBox="0 0 60 75"
							className="absolute right-32 top-6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M43.3007 0.375305C37.8365 18.9005 46.1304 32.1124 59.2562 49.3757L0.706381 26.0905C23.5272 22.2107 36.1257 17.5692 43.3007 0.375305Z"
								fill="#4185F4"
							/>
							<path
								d="M14.049 74.0517C19.5132 55.5265 13.8322 43.3538 0.706381 26.0905L59.2562 49.3757C36.4354 53.2555 21.224 56.8579 14.049 74.0517Z"
								fill="#4185F4"
							/>
						</svg>
						<svg
							width="21"
							height="17"
							viewBox="0 0 21 17"
							fill="none"
							className="absolute right-5 top-7"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.2187 3.47353C15.6465 6.16453 14.8313 10.3712 14.2253 16.2971L6.84889 0.639977C12.1549 4.14364 15.5532 5.57645 20.2187 3.47353Z"
								fill="#86E0C0"
							/>
							<path
								d="M0.526307 12.7649C5.09844 10.0739 6.24281 6.56597 6.84889 0.639977L14.2253 16.2971C8.91927 12.7935 5.19182 10.6619 0.526307 12.7649Z"
								fill="#86E0C0"
							/>
						</svg>

						<p className="text-black bg-white px-8 py-5 rounded-full text-2xl -rotate-[25deg] font-CabinetGrotesk-Bold absolute top-10 z-10 right-8">
							100%
						</p>
						<img
							src={stars}
							alt=""
							className="absolute top-32 right-12"
						/>

						<svg
							width="60"
							height="75"
							viewBox="0 0 60 75"
							className="absolute right-4 bottom-40 rotate-12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M43.3007 0.375305C37.8365 18.9005 46.1304 32.1124 59.2562 49.3757L0.706381 26.0905C23.5272 22.2107 36.1257 17.5692 43.3007 0.375305Z"
								fill="#FB6F3C"
							/>
							<path
								d="M14.049 74.0517C19.5132 55.5265 13.8322 43.3538 0.706381 26.0905L59.2562 49.3757C36.4354 53.2555 21.224 56.8579 14.049 74.0517Z"
								fill="#FB6F3C"
							/>
						</svg>
						<svg
							width="60"
							height="75"
							viewBox="0 0 60 75"
							className="absolute right-16 bottom-9 -rotate-45"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M43.3007 0.375305C37.8365 18.9005 46.1304 32.1124 59.2562 49.3757L0.706381 26.0905C23.5272 22.2107 36.1257 17.5692 43.3007 0.375305Z"
								fill="#3F1CCB"
							/>
							<path
								d="M14.049 74.0517C19.5132 55.5265 13.8322 43.3538 0.706381 26.0905L59.2562 49.3757C36.4354 53.2555 21.224 56.8579 14.049 74.0517Z"
								fill="#3F1CCB"
							/>
						</svg>
					</div>
					<h1 className="text-6xl max-w-[800px]">
						Unlock Your{" "}
						<div className="max-w-fit inline-block">
							<p>Potential</p>
							<div className="w-full rainbow-bg h-[3px] rounded-sm"></div>
						</div>{" "}
						with Personalized Study Paths.
					</h1>

					<h2 className="text-2xl max-w-[680px] mt-10">
						Connect with Thousands of Successful Students and Start
						your Journey to Academic Success Today.
					</h2>

					<fieldset>
						<div className="border-[#CCCCCC] w-[450px] flex flex-row pl-6 pr-1 py-1 rounded-2xl mt-6 text-white border-2 hover:border-violet-500 focus-within:border-violet-300 outline-none">
							<input
								type="email"
								placeholder="Enter your Email Address"
								name="email"
								id="email"
								autoComplete="off"
								className="w-full outline-none placeholder:text-gray-300"
							/>
							<button className="text-black min-w-fit border-2 border-white hover:border-violet-500 focus:border-violet-300 outline-none bg-white p-3 rounded-xl font-CabinetGrotesk-Bold">
								Join Waitlist
							</button>
						</div>
					</fieldset>

					<p className="mt-8 max-w-[550px] font-CabinetGrotesk-Regular text-base">
						Join the AfriExamAce Waitlist and be among our the first
						to experience our Revolutionary Exam Preparation
						Platform
					</p>

					<div className="blur-[130px] h-[460px] rounded-full w-[460px] transition-blur duration-default ease-smooth mx-auto bg-[#9239B2] absolute -bottom-[420px] left-0 right-0"></div>
				</header>

				<section className="mt-20">
					<img
						draggable="false"
						src={Desktop}
						alt="AfriExamAce Dashboard view"
					/>
				</section>

				<section className="mt-52 text-center">
					{/* <p className="font-CabinetGrotesk-Medium text-5xl cursor-default">
						<div className="max-w-fit inline-block">
							<p>Explore</p>
							<div className="w-full rainbow-bg h-[3px] rounded-sm"></div>
						</div>{" "}
						the essential features that makes us the best choice for
						your exam preparation
					</p> */}
					<p className="font-CabinetGrotesk-Regular text-5xl cursor-default">
						Explore the{" "}
						<span className="font-CabinetGrotesk-Bold">
							essential features
						</span>{" "}
						that makes us{" "}
						<span className="font-CabinetGrotesk-Bold">
							the best choice for your exam preparation.
						</span>
					</p>
				</section>

				<div className="flex flex-col gap-36 mt-36">
					<section className="flex flex-row items-center gap-16">
						<img
							src={Frame1}
							className="bg-[#141414] h-[620px] w-[620px] outline-none border-none rounded-3xl"></img>
						<div className="max-w-[650px] flex flex-col gap-8">
							<div className="flex flex-row gap-2 items-center">
								<div className="w-2 h-2 rounded-full bg-purple-600"></div>
								<p className="font-CabinetGrotesk-Regular text-sm w-fit underline-effect">
									Master Your Exams with Real Past Papers!
									<div className=""></div>
								</p>
							</div>
							<h3 className="font-CabinetGrotesk-Bold text-4xl">
								Practice past question papers with our platform
							</h3>
							<p className="font-CabinetGrotesk-Regular text-xl">
								Lorem ipsum dolor sit amet consectetur. Dolor
								pellentesque massa sagittis tincidunt interdum
								vulputate tempus sem. Imperdiet aliquam netus
								neque morbi ultrices lorem nisi commodo. Egestas
								tempor cras egestas eget ac dictum duis. Mauris
								aliquam sit sit nec accumsan lorem diam amet
								sit.
							</p>
						</div>
					</section>

					<section className="flex flex-row items-center gap-16">
						<div className="max-w-[650px] flex flex-col gap-8">
							<div className="flex flex-row gap-2 items-center">
								<div className="w-2 h-2 rounded-full bg-green-400"></div>
								<p className="font-CabinetGrotesk-Regular text-sm underline-effect">
									Turn Mistakes into Mastery!
									<div className=""></div>
								</p>
							</div>
							<h3 className="font-CabinetGrotesk-Bold text-4xl">
								Learn from your mistakes
							</h3>
							<p className="font-CabinetGrotesk-Regular text-xl">
								Lorem ipsum dolor sit amet consectetur. Dolor
								pellentesque massa sagittis tincidunt interdum
								vulputate tempus sem. Imperdiet aliquam netus
								neque morbi ultrices lorem nisi commodo. Egestas
								tempor cras egestas eget ac dictum duis. Mauris
								aliquam sit sit nec accumsan lorem diam amet
								sit.
							</p>
						</div>
						<img
							src={Frame2}
							className="bg-[#141414] border-none outline-none h-[620px] w-[620px] rounded-3xl"></img>
					</section>

					<section className="flex flex-row items-center gap-16">
						<img
							src={FrameLeaderboard}
							className="bg-[#141414] outline-none border-none h-[620px] w-[620px] rounded-3xl"></img>
						<div className="max-w-[650px] flex flex-col gap-8">
							<div className="flex flex-row gap-2 items-center">
								<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
								<p className="font-CabinetGrotesk-Regular text-sm underline-effect">
									Challenge Friends, Beat Rivals, Ace Exams
									<div className=""></div>
								</p>
							</div>
							<h3 className="font-CabinetGrotesk-Bold text-4xl">
								Learn with{" "}
								<span className="font-CabinetGrotesk-Regular italic">
									your friends
								</span>{" "}
								and compete with students round the country
							</h3>
							<p className="font-CabinetGrotesk-Regular text-xl">
								Lorem ipsum dolor sit amet consectetur. Dolor
								pellentesque massa sagittis tincidunt interdum
								vulputate tempus sem. Imperdiet aliquam netus
								neque morbi ultrices lorem nisi commodo. Egestas
								tempor cras egestas eget ac dictum duis. Mauris
								aliquam sit sit nec accumsan lorem diam amet
								sit.
							</p>
						</div>
					</section>

					<section className="flex flex-row items-center gap-16">
						<div className="max-w-[650px] flex flex-col gap-8">
							<div className="flex flex-row gap-2 items-center">
								<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
								<p className="font-CabinetGrotesk-Regular text-sm underline-effect">
									Stay Sharp with our Daily Challenges
									<div className=""></div>
								</p>
							</div>
							<h3 className="font-CabinetGrotesk-Bold text-4xl">
								Daily Study{" "}
								<span className="font-CabinetGrotesk-Regular">
									Challenges
								</span>
							</h3>
							<p className="font-CabinetGrotesk-Regular text-xl">
								Spice up your study routine with our Daily Study
								Challenges! Complete fun, bite-sized tasks each
								day to earn rewards and keep your brain sharp.
								Collect points and badges to show off your
								achievements
							</p>
						</div>
						<img
							src={FrameTask}
							className="bg-[#141414] border-none outline-none h-[620px] w-[620px] rounded-3xl"></img>
					</section>
				</div>

				<section className="mt-44 flex flex-col items-center gap-6">
					<h3 className="text-4xl mx-auto w-fit">How it works.</h3>

					<div className="w-full flex flex-row items-center justify-between h-[300px] bg-[#141414] px-8 rounded-2xl mt-8 border-2 border-[#141414] hover:border-violet-500 transition-all duration-300">
						<div></div>
						<p className="font-light max-w-[630px]">
							Master key concepts with our interactive flashcards!
							Flip through them anytime, anywhere to reinforce
							your memory and ace your exams. Customize your own
							flashcard sets to target specific topics.{" "}
						</p>
					</div>
					<div className="w-full flex flex-row gap-4">
						<div className="w-full flex flex-row items-center justify-between h-[500px] bg-[#141414] px-8 rounded-2xl mt-8 border-2 border-[#141414] hover:border-violet-500 transition-all duration-300"></div>
						<div className="flex flex-row items-center justify-between min-w-[500px] h-[500px] bg-[#141414] px-8 rounded-2xl mt-8 border-2 border-[#141414] hover:border-violet-500 transition-all duration-300"></div>
					</div>
				</section>

				<section className="mt-32">
					<h6 className="font-CabinetGrotesk-Medium text-5xl text-center mx-auto w-full">
						Join our waitlist and be the first to experience
						efficient and fun learning platform
					</h6>

					<div className="w-full flex flex-row gap-2 h-[500px] mt-16">
						<div className="w-full h-full bg-[#141414] rounded-md border-2 border-[#141414] hover:border-violet-500 transition-all duration-300"></div>
						<div className="w-full h-full flex flex-col gap-2">
							<div className="h-full bg-[#141414] w-full rounded-md border-2 border-[#141414] hover:border-violet-500 transition-all duration-300"></div>
							<div className="h-full flex flex-row gap-2">
								<div className="bg-[#141414] w-full rounded-md border-2 border-[#141414] hover:border-violet-500 transition-all duration-300"></div>
								<div className="bg-[#141414] w-2/3 rounded-md border-2 border-[#141414] hover:border-violet-500 transition-all duration-300"></div>
							</div>
						</div>
					</div>
				</section>

				<footer className="mt-64">
					<section className="px-12 flex flex-row justify-between">
						<div className="max-w-[400px]">
							<h6 className="font-CabinetGrotesk-Medium text-xl">
								Subscribe to join our Discord Community.
							</h6>
							<p className="text-sm text-[#ffffff99] mt-3">
								Get a summary of what we’re going to ship and
								test out all new features, get behind the scenes
								updates, and team picks.
							</p>
						</div>
						<fieldset className="flex flex-row gap-2 h-fit">
							<div className="flex flex-row items-center text-[#CCCCCC66] placeholder:text-[#CCCCCC66] px-2 border-2 border-white hover:border-violet-500 focus-within:border-violet-300 outline-none rounded-md">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
									/>
								</svg>

								<input
									type="email"
									name="early-access-email"
									id="early-access-email"
									autoComplete="off"
									placeholder="Enter your email"
									className="border-none px-3 py-2 w-[300px] font-CabinetGrotesk-Regular outline-none placeholder:text-gray-300 text-white"
								/>
							</div>

							<button
								className="bg-white border-2 border-white hover:border-violet-500 focus:border-violet-300 outline-none text-black px-4 text-sm py-[10px] rounded-md font-CabinetGrotesk-Medium"
								type="submit">
								Get early access
							</button>
						</fieldset>
					</section>
					<section className="px-12 py-10 mt-6 flex flex-row justify-between">
						<div>
							<img
								draggable="false"
								src={Icon_logo}
								alt="AfriExamAce Logo"
							/>
						</div>
						<div className="flex flex-row gap-8 font-CabinetGrotesk-Medium">
							<ul className="flex flex-col gap-2 clickable">
								<li className="text-[#F1F2F999]">Navigation</li>
								<li>Home</li>
								<li>About Us</li>
								<li>Contact Us</li>
							</ul>
							<ul className="flex flex-col gap-2 clickable">
								<li className="text-[#F1F2F999]">Categories</li>
								<li>WAEC</li>
								<li>NECO</li>
								<li>JAMB</li>
								<li>GCE</li>
								<li>SAT</li>
							</ul>
							<ul className="flex flex-col gap-2 clickable">
								<li className="text-[#F1F2F999]">Company</li>
								<li>Become an educator</li>
								<li>Affilate</li>
								<li>About us of use</li>
								<li>Donate</li>
								<li>News</li>
								<li>Community</li>
							</ul>
							<ul className="flex flex-col gap-2 clickable">
								<li className="text-[#F1F2F999]">Info</li>
								<li>Licence</li>
								<li>Cookies</li>
								<li>Terms of use</li>
								<li>Privacy</li>
								<li>F.A.Q</li>
							</ul>
						</div>
					</section>

					<section className="mt-8 px-32 bg-[#141414] py-7 w-full items-center flex flex-row justify-between">
						<span className="text-[#EAECF866]">
							AfriExamAce. All right reserved. © 2024
						</span>
						<div className="flex flex-row gap-4 items-center">
							<a
								href="https://github.com/AfriExamAce"
								target="_blank"
								className="p-1 rounded-md border-2 border-[#141414] outline-none focus:border-violet-300 hover:border-violet-500"
								rel="noopener noreferrer">
								<svg
									width="32px"
									height="32px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
										stroke="#EAECF866"
										stroke-width="2"
									/>
									<path
										d="M13.717 8.88177C12.5881 8.56954 11.4119 8.56954 10.283 8.88177C10.2189 8.89949 10.155 8.91822 10.0912 8.93795L10.0894 8.93853C10.0564 8.94889 10.0205 8.94235 9.99324 8.92103V8.92103C9.95517 8.8914 9.91766 8.8627 9.8807 8.83491C8.69311 7.94193 8.07278 7.98181 7.91927 8.01161V8.01161C7.8946 8.0164 7.87585 8.03481 7.86732 8.05844C7.86516 8.06441 7.86303 8.07038 7.8609 8.07636C7.61639 8.76505 7.57904 9.52813 7.75277 10.2425C7.76289 10.2841 7.77371 10.3255 7.78525 10.3667C7.78601 10.3694 7.78677 10.3721 7.78753 10.3748C7.79754 10.4102 7.7902 10.4483 7.7678 10.4776V10.4776C7.75074 10.4998 7.73394 10.5223 7.71741 10.545C7.24479 11.1939 6.98907 12.0213 7.00036 12.8747C7.00036 16.3399 8.80396 17.1358 10.535 17.3711L10.5708 17.3758C11.5347 17.5199 12.4587 17.511 13.4195 17.3479L13.4438 17.345C15.1832 17.1339 16.9996 16.3587 16.9996 12.8747C17.0109 12.0213 16.7552 11.1939 16.2826 10.545C16.2674 10.5242 16.252 10.5035 16.2364 10.483C16.236 10.4825 16.2356 10.482 16.2352 10.4815C16.211 10.4498 16.203 10.4085 16.2138 10.3701V10.3701C16.2257 10.3277 16.2368 10.2852 16.2471 10.2425C16.421 9.52611 16.3815 8.76076 16.1329 8.07176C16.1313 8.06753 16.1298 8.06331 16.1283 8.05909C16.1195 8.03503 16.1004 8.01628 16.0752 8.01142V8.01142C15.921 7.98164 15.3041 7.94381 14.1193 8.83491C14.0848 8.86084 14.0499 8.88755 14.0144 8.91508V8.91508C13.9824 8.94011 13.9402 8.94762 13.9013 8.93566C13.9005 8.9354 13.8997 8.93514 13.8988 8.93488C13.8384 8.91627 13.7778 8.89857 13.717 8.88177Z"
										stroke="#EAECF866"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
							<a
								href="http://"
								target="_blank"
								className="p-1 rounded-md border-2 border-[#141414] outline-none hover:border-violet-500 focus:border-violet-300"
								rel="noopener noreferrer">
								<svg
									width="32px"
									height="32px"
									viewBox="0 0 192 192"
									xmlns="http://www.w3.org/2000/svg"
									fill="none">
									<path
										stroke="#EAECF866"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="12"
										d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"
									/>
									<ellipse
										cx="71"
										cy="101"
										fill="#EAECF866"
										rx="13"
										ry="15"
									/>
									<ellipse
										cx="121"
										cy="101"
										fill="#EAECF866"
										rx="13"
										ry="15"
									/>
								</svg>
							</a>
							<a
								href="http://"
								className="p-2 rounded-md border-2 border-[#141414] outline-none hover:border-violet-500 focus:border-violet-300"
								target="_blank"
								rel="noopener noreferrer">
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 20 20"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg">
									<title>instagram [#167]</title>
									<desc>Created with Sketch.</desc>
									<defs></defs>
									<g
										id="Page-1"
										stroke="none"
										stroke-width="1"
										fill="none"
										fill-rule="evenodd">
										<g
											id="Dribbble-Light-Preview"
											transform="translate(-340.000000, -7439.000000)"
											fill="#EAECF866">
											<g
												id="icons"
												transform="translate(56.000000, 160.000000)">
												<path
													d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
													id="instagram-[#167]"></path>
											</g>
										</g>
									</g>
								</svg>
							</a>
						</div>
					</section>
				</footer>
			</div>
		</div>
	);
};

export default Home;
