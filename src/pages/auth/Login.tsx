import { useState } from "react";

const Login = () => {
	const [state, setState] = useState({
		email: "",
		password: "",
		showPassword: false,
	});

	const toggleShowPassword = () => {
		setState((prevState) => ({
			...prevState,
			showPassword: !prevState.showPassword,
		}));
	};

	const updateState = (val: string, data: string) => {
		setState((prevState) => ({
			...prevState,
			[val]: data,
		}));
	};

	return (
		<div className="pt-28">
			<header className="flex flex-col items-center">
				<h1 className="text-3xl font-bold">
					Welcome <span className="text-yellow-700">Back</span>! 👋
				</h1>
				<p className="text-neutral-400">
					Just fill in your details and you'll be taken to your
					account!
				</p>
			</header>

			<form
				action=""
				className="flex flex-col gap-3 max-w-lg mx-auto mt-12">
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
					<label htmlFor="email" className="duration-300 font-medium">
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
							onClick={toggleShowPassword}
							className="outline-none focus:outline-dashed focus:outline-2 focus:outline-yellow-700 cursor-pointer rounded-full"
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === "Space") {
									toggleShowPassword();
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

				<button
					type="submit"
					className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-1 text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-6 rounded-md">
					Log in
				</button>
				<footer className="mx-auto">
					<p className="font-light text-sm text-gray-300">
						Not registered?{" "}
						<a
							href="/register"
							className="hover:text-yellow-600 text-gray-400 duration-300 underline font-normal focus:rounded-full focus:outline focus:outline-1 focus:outline-yellow-600">
							Register now
						</a>
					</p>
					<p className="font-light text-sm text-gray-300">
						Forgot password?{" "}
						<a
							href="./reset"
							className="underline font-normal text-gray-400 duration-300 hover:text-yellow-600 focus:rounded-full focus:outline focus:outline-1 focus:outline-yellow-600">
							Reset here
						</a>
					</p>
				</footer>
			</form>
		</div>
	);
};

export default Login;
