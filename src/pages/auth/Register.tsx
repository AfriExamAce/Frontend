import { useState } from "react";

const Register = () => {
	document.title = "Register | AfriExamAce";

	const [state, setState] = useState({
		email: "",
		password: "",
		c_password: "",
		first_name: "",
		last_name: "",
		showCPassword: false,
		showPassword: false,
	});

	const toggleShowPassword = (type: "confirm" | "normal") => {
		console.log(type);
		setState((prevState) => ({
			...prevState,
			[type === "normal" ? "showPassword" : "showCPassword"]:
				type === "normal"
					? !prevState.showPassword
					: !prevState.showCPassword,
		}));
	};

	const updateState = (val: string, data: string) => {
		setState((prevState) => ({
			...prevState,
			[val]: data,
		}));
	};

	return (
		<div className="py-28 h-screen overflow-y-auto">
			<header className="flex flex-col items-center">
				<h1 className="text-3xl font-bold">
					We’re glad to{" "}
					<span className="text-yellow-700">meet you</span>! 🚀
				</h1>
				<p className="text-neutral-400 text-center">
					Just fill in your details and you'll be created an account,
					and taken there!
				</p>
			</header>

			<form
				action=""
				className="flex flex-col gap-3 max-w-lg mx-auto mt-12">
				<fieldset className="flex flex-col gap-1 px-2 focus-within:text-yellow-600">
					<label
						htmlFor="first_name"
						className="duration-300 font-medium">
						First Name
					</label>
					<input
						type="text"
						name="first_name"
						id="first_name"
						required
						value={state.first_name}
						onChange={(e) =>
							updateState("first_name", e.target.value)
						}
						className="outline outline-2 py-1 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
					/>
				</fieldset>

				<fieldset className="flex flex-col gap-1 px-2 focus-within:text-yellow-600">
					<label
						htmlFor="last_name"
						className="duration-300 font-medium">
						Last Name
					</label>
					<input
						type="text"
						name="last_name"
						id="last_name"
						required
						value={state.first_name}
						onChange={(e) =>
							updateState("last_name", e.target.value)
						}
						className="outline outline-2 py-1 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
					/>
				</fieldset>

				<fieldset className="flex flex-col gap-1 px-2 focus-within:text-yellow-600">
					<label htmlFor="email" className="duration-300 font-medium">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						value={state.email}
						onChange={(e) => updateState("email", e.target.value)}
						className="outline outline-2 py-1 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
					/>
				</fieldset>

				<fieldset className="flex flex-col gap-1 px-2 focus-within:text-yellow-600">
					<label
						htmlFor="password"
						className="duration-300 font-medium">
						Password
					</label>
					<div className="w-full flex flex-row justify-between items-center active:outline-yellow-700 outline-2 focus-within:outline-yellow-700  bg-zinc-700 rounded-sm outline-zinc-800 outline px-2">
						<input
							type={state.showPassword ? "text" : "password"}
							name="password"
							id="password"
							value={state.password}
							onChange={(e) =>
								updateState("password", e.target.value)
							}
							className="py-1 border-none text-white outline-none bg-transparent w-full "
						/>
						<div
							tabIndex={0}
							onClick={() => toggleShowPassword("normal")}
							className="outline-none focus:outline-dashed focus:outline-2 focus:outline-yellow-700 cursor-pointer rounded-full"
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === "Space") {
									toggleShowPassword("normal");
								}
							}}>
							{state.showPassword && (
								<i className="pi pi-eye-slash text-neutral-400 text-xl cursor-pointer"></i>
							)}
							{!state.showPassword && (
								<i className="pi pi-eye text-neutral-400 text-xl cursor-pointer"></i>
							)}
						</div>
					</div>
				</fieldset>

				<fieldset className="flex flex-col gap-1 px-2 focus-within:text-yellow-600">
					<label
						htmlFor="c_password"
						className="duration-300 font-medium">
						Confirm Password
					</label>
					<div className="w-full flex flex-row justify-between items-center active:outline-yellow-700 outline-2 focus-within:outline-yellow-700  bg-zinc-700 rounded-sm outline-zinc-800 outline px-2">
						<input
							type={state.showCPassword ? "text" : "password"}
							name="c_password"
							id="c_password"
							value={state.c_password}
							onChange={(e) =>
								updateState("c_password", e.target.value)
							}
							className="py-1 border-none text-white outline-none bg-transparent w-full "
						/>
						<div
							tabIndex={0}
							onClick={() => toggleShowPassword("confirm")}
							className="outline-none focus:outline-dashed focus:outline-2 focus:outline-yellow-700 cursor-pointer rounded-full"
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === "Space") {
									toggleShowPassword("confirm");
								}
							}}>
							{state.showCPassword && (
								<i className="pi pi-eye-slash text-neutral-400 text-xl cursor-pointer"></i>
							)}
							{!state.showCPassword && (
								<i className="pi pi-eye text-neutral-400 text-xl cursor-pointer"></i>
							)}
						</div>
					</div>
				</fieldset>

				<button
					type="submit"
					className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-1 text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-6 rounded-md">
					Register
				</button>
				<footer className="mx-auto">
					<p className="font-light text-sm text-gray-300">
						Already registered?{" "}
						<a
							href="/login"
							className="hover:text-yellow-600 text-gray-400 duration-300 underline font-normal focus:rounded-full focus:outline focus:outline-1 focus:outline-yellow-600">
							login here
						</a>
					</p>
				</footer>
			</form>
		</div>
	);
};

export default Register;
