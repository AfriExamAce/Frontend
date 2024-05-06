import { FormEvent, useState } from "react";
import UseFetch from "../../components/general/UseFetch";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";
import { useRef } from "react";
import { showSuccess } from "../../components/general/toast";

const Register = () => {
	document.title = "Register | AfriExamAce";
	const Navigate = useNavigate();
	const toast = useRef<Toast>(null);

	const [state, setState] = useState({
		email: "",
		password: "",
		c_password: "",
		first_name: "",
		last_name: "",
		showCPassword: false,
		showPassword: false,
		isLoading: false,
		err: null,
	});

	const toggleShowPassword = (type: "confirm" | "normal") => {
		setState((prevState) => ({
			...prevState,
			[type === "normal" ? "showPassword" : "showCPassword"]:
				type === "normal"
					? !prevState.showPassword
					: !prevState.showCPassword,
		}));
	};

	const updateState = (val: string, data: string | boolean | null) => {
		setState((prevState) => ({
			...prevState,
			[val]: data,
		}));
	};

	const handleFormSubmition = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateState("isLoading", true);
		updateState("err", null);

		if (state.password !== state.c_password) {
			updateState("err", "Passwords do not match!");
			updateState("isLoading", false);
			return;
		}

		const { data, response } = await UseFetch({
			url: "auth/register",
			options: {
				method: "POST",
				useServerUrl: true,
				body: {
					first_name: state.first_name,
					last_name: state.last_name,
					email: state.email,
					password: state.password,
				},
				returnResponse: true,
			},
		});

		if (!response.ok || !data.success) {
			const { message } = data;
			if (message) {
				updateState("err", message);
				updateState("isLoading", false);
			}
			return;
		}

		showSuccess(toast, "Successfully registered!");
		Navigate("/", { replace: true });
		updateState("isLoading", false);
	};

	return (
		<div className="py-28 h-screen overflow-y-auto">
			<Toast ref={toast} />

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
				onSubmit={handleFormSubmition}
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
						className="outline outline-2 py-3 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
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
						value={state.last_name}
						onChange={(e) =>
							updateState("last_name", e.target.value)
						}
						className="outline outline-2 py-3 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
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
						required
						value={state.email}
						onChange={(e) => updateState("email", e.target.value)}
						className="outline outline-2 py-3 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
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
							required
							onChange={(e) =>
								updateState("password", e.target.value)
							}
							className="py-3 border-none text-white outline-none bg-transparent w-full "
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
							required
							value={state.c_password}
							onChange={(e) =>
								updateState("c_password", e.target.value)
							}
							className="py-3 border-none text-white outline-none bg-transparent w-full "
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

				{state.err && <Message severity="error" text={state.err} />}

				<button
					type="submit"
					className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-3 text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-6 rounded-md flex justify-center items-center gap-2 text-xl">
					{state.isLoading && <i className="pi pi-spin pi-cog"></i>}
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
