import { useState } from "react";

const PwdReset = () => {
	const [state, setState] = useState({
		email: "",
	});

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
					Sorry for the{" "}
					<span className="text-yellow-700">inconveniences</span>!
				</h1>
				<p className="text-neutral-400 max-w-96 text-center mt-2">
					Submit your email to reset your password. We'll send you an
					OTP to reset your password.
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

				<button
					type="submit"
					className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-1 text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-6 rounded-md">
					Submit
				</button>
				<footer className="mx-auto">
					<p className="font-light text-sm text-gray-300">
						Remembered your password?{" "}
						<a
							href="/register"
							className="hover:text-yellow-600 text-gray-400 duration-300 underline font-normal focus:rounded-full focus:outline focus:outline-1 focus:outline-yellow-600">
							Login here
						</a>
					</p>
				</footer>
			</form>
		</div>
	);
};

export default PwdReset;
