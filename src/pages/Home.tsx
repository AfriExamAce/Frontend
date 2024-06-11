import Nav from "../components/general/Nav";
import Desktop from "../assets/Desktop - 33.svg";
import Icon_logo from "../assets/icon-logo.svg";

const Home = () => {
	return (
		<div className="overflow-y-auto w-full h-full">
			<div className="px-12">
				<Nav />
				<div className="w-full bg-[#141414] text-center h-[556px] rounded-[40px] relative overflow-hidden font-CabinetGrotesk-Medium flex flex-col items-center py-20 mt-12">
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
						<div className="border-[#CCCCCC] w-[450px] flex flex-row pl-6 pr-1 py-1 rounded-2xl border-2 mt-6">
							<input
								type="email"
								placeholder="Enter your Email Address"
								name="email"
								id="email"
								autoComplete="off"
								className="w-full outline-none"
							/>
							<button className="text-black min-w-fit bg-white p-3 rounded-xl font-CabinetGrotesk-Bold">
								Join Waitlist
							</button>
						</div>
					</fieldset>

					<p className="mt-8 max-w-[550px] font-CabinetGrotesk-Regular text-base">
						Join the AfriExamAce Waitlist and be among our the first
						to experience our Revolutionary Exam Preparation
						Platform
					</p>

					<div className="blur-[100px] h-[460px] rounded-full w-[460px] transition-blur duration-default ease-smooth mx-auto bg-[#9239B2] absolute -bottom-[420px] left-0 right-0"></div>
				</div>

				<section className="mt-20">
					<img
						draggable="false"
						src={Desktop}
						alt="AfriExamAce Dashboard view"
					/>
				</section>

				<section className="mt-52 text-center">
					<p className="font-CabinetGrotesk-Medium text-5xl cursor-default">
						<div className="max-w-fit inline-block">
							<p>Explore</p>
							<div className="w-full rainbow-bg h-[3px] rounded-sm"></div>
						</div>{" "}
						the essential features that makes us the best choice for
						your exam preparation
					</p>
				</section>

				<div className="flex flex-col gap-36 mt-36">
					<section className="flex flex-row items-center gap-16">
						<div className="bg-[#141414] h-[620px] w-[620px] rounded-3xl"></div>
						<div className="max-w-[650px] flex flex-col gap-8">
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
						<div className="bg-[#141414] h-[620px] w-[620px] rounded-3xl"></div>
					</section>

					<section className="flex flex-row items-center gap-16">
						<div className="bg-[#141414] h-[620px] w-[620px] rounded-3xl"></div>
						<div className="max-w-[650px] flex flex-col gap-8">
							<h3 className="font-CabinetGrotesk-Bold text-4xl">
								Learn with your friends and compete with
								students round the country
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
				</div>

				<section className="mt-44 flex flex-col items-center gap-6">
					<div className="w-[1000px] h-[90px] bg-[#D9D9D9]"></div>
					<div className="w-[660px] h-[30px] bg-[#D9D9D9] my-2"></div>
					<div className="w-[540px] h-[30px] bg-[#D9D9D9]"></div>
					<div className="w-[570px] h-[30px] bg-[#D9D9D9]"></div>
				</section>

				<section className="mt-20">
					<div className="h-[625px] w-full rounded-2xl bg-[#141414]"></div>
				</section>

				<section className="mt-36 text-center">
					<h4 className="font-CabinetGrotesk-Medium text-5xl">
						Join our wait list and be the first to experience
						efficient and fun learning platform
					</h4>
				</section>

				<section className="flex flex-row justify-between gap-6 mt-36">
					<div className="bg-[#D9D9D9] w-[430px] h-[448px] mt-16"></div>
					<div className="bg-[#D9D9D9] w-[430px] h-[448px]"></div>
					<div className="bg-[#D9D9D9] w-[430px] h-[448px] mt-16"></div>
				</section>
			</div>

			<footer className="mt-[960px]">
				<section className="px-12 flex flex-row justify-between">
					<div className="max-w-[400px]">
						<h6 className="font-CabinetGrotesk-Medium text-xl">
							Subscribe to join our Discord Community.
						</h6>
						<p className="text-sm text-[#ffffff99] mt-3">
							Get a summary of what we’re going to ship and test
							out all new features, get behind the scenes updates,
							and team picks.
						</p>
					</div>
					<fieldset className="flex flex-row gap-2 h-fit">
						<div className="flex flex-row items-center border text-[#CCCCCC66] placeholder:text-[#CCCCCC66] px-2 border-white rounded-md">
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
								className="border-none px-3 py-2 w-[300px] font-CabinetGrotesk-Regular outline-none"
							/>
						</div>

						<button
							className="bg-white text-black px-4 text-sm py-[10px] rounded-md font-CabinetGrotesk-Medium"
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

				<section className="mt-8 px-32 bg-[#141414] py-7 w-full flex flex-row justify-between">
					<span className="text-[#EAECF866]">
						AfriExamAce. All right reserved. © 2024
					</span>
					<div></div>
				</section>
			</footer>
		</div>
	);
};

export default Home;
