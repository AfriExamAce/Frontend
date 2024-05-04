import { FormEvent, useRef, useState } from "react";
import { showSuccess } from "../../components/general/toast";
import UseFetch from "../../components/general/UseFetch";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";

const PwdReset = () => {
	document.title = "Reset Password | AfriExamAce";
	const Navigate = useNavigate();
	const toast = useRef<Toast>(null);
	const [state, setState] = useState({
		email: "",
		err: null,
		isLoading: false,
	});

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

		const { data, response } = await UseFetch({
			url: "auth/forgot-password",
			options: {
				method: "POST",
				useServerUrl: true,
				body: {
					email: state.email,
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

		// TODO: COMPLETE LATER
		return;
		showSuccess(toast);
		Navigate("/", { replace: true });
		updateState("isLoading", false);
	};

	return (
		<div className="py-28">
			<Toast ref={toast} />

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
				onSubmit={handleFormSubmition}
				className="flex flex-col gap-3 max-w-lg mx-auto mt-12">
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

				{state.err && <Message severity="error" text={state.err} />}

				<button
					type="submit"
					className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-3 text-xl text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-6 rounded-md">
					Submit
				</button>
				<footer className="mx-auto">
					<p className="font-light text-sm text-gray-300">
						Remembered your password?{" "}
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

export default PwdReset;
