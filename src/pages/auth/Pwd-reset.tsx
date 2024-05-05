import { FormEvent, MouseEvent, useRef, useState } from "react";
import { showSuccess } from "../../components/general/toast";
import UseFetch from "../../components/general/UseFetch";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";
import { InputOtp } from "primereact/inputotp";

const PwdReset = () => {
	document.title = "Reset Password | AfriExamAce";
	const Navigate = useNavigate();
	const toast = useRef<Toast>(null);
	const [state, setState] = useState({
		email: "",
		err: null,
		isLoading: false,
		requestSent: false,
		otp: "",
		password: "",
		showPassword: false,
		showOTPInput: false,
		canSendRequest: true,
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const updateState = (val: string, data: any) => {
		setState((prevState) => ({
			...prevState,
			[val]: data,
		}));
	};

	const startTimer = (time: number) => {
		updateState("canSendRequest", false);
		console.log(2);
		setTimeout(() => {
			console.log(1);
			updateState("canSendRequest", true);
		}, time);
	};

	const handleFormSubmition = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState((prev) => ({ ...prev, isLoading: true, err: null }));

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

		showSuccess(toast, "Request sent successfully!");
		startTimer(60 * 1000);
		// 1 minute
		setState((prev) => {
			return { ...prev, requestSent: true, isLoading: false };
		});
	};

	const handlePasswordReset = async (
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => {
		e.preventDefault();
		setState((prev) => ({ ...prev, isLoading: true, err: null }));

		const { data, response } = await UseFetch({
			url: "auth/reset-password",
			options: {
				method: "POST",
				useServerUrl: true,
				body: {
					otpCode: state.otp,
					newPassword: state.password,
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

		showSuccess(toast, "Successfully reseted password!");
		updateState("isLoading", false);
		Navigate("/login", { replace: true });
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
				{!state.requestSent && (
					<fieldset className="flex flex-col gap-1 px-2 focus-within:text-yellow-600">
						<label
							htmlFor="email"
							className="duration-300 font-medium">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							value={state.email}
							onChange={(e) =>
								updateState("email", e.target.value)
							}
							className="outline outline-2 py-3 px-2 rounded-sm text-white bg-zinc-700 outline-zinc-800 active:outline-yellow-700 focus:outline-yellow-700"
						/>
					</fieldset>
				)}

				{state.requestSent && (
					<fieldset className="grid place-content-center mt-4">
						<InputOtp
							value={state.otp}
							onChange={(e) => updateState("otp", e.value)}
							integerOnly
							length={6}
						/>
					</fieldset>
				)}

				{state.requestSent && (
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
								className="py-3 border-none text-white outline-none bg-transparent w-full "
							/>
							<div
								tabIndex={0}
								onClick={() =>
									updateState(
										"showPassword",
										!state.showPassword
									)
								}
								className="outline-none focus:outline-dashed focus:outline-2 focus:outline-yellow-700 cursor-pointer rounded-full"
								onKeyDown={(e) => {
									if (
										e.key === "Enter" ||
										e.key === "Space"
									) {
										updateState(
											"showPassword",
											!state.showPassword
										);
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
				)}

				{state.err && <Message severity="error" text={state.err} />}
				{state.requestSent && state.canSendRequest && (
					<p className="text-center text-neutral-300 text-sm cursor-default">
						You can now try again
					</p>
				)}
				{state.requestSent && (
					<button
						type="submit"
						onClick={handlePasswordReset}
						className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-3 text-xl text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-4 rounded-md">
						Save Password
					</button>
				)}
				{!state.requestSent && (
					<button
						type="submit"
						className="w-full bg-yellow-700 active:bg-yellow-800  hover:bg-yellow-800 duration-300 focus:outline-dashed outline outline-2 outline-yellow-900 py-3 text-xl text-white hover:text-neutral-300 font-medium max-w-sm mx-auto mt-6 rounded-md">
						Submit
					</button>
				)}
				<footer className="mx-auto">
					{state.requestSent && state.canSendRequest && (
						<p
							onClick={() =>
								setState((prev) => ({
									email: prev.email,
									err: null,
									isLoading: false,
									requestSent: false,
									otp: "",
									password: "",
									showPassword: false,
									showOTPInput: false,
									canSendRequest: prev.canSendRequest,
								}))
							}
							className="font-light text-center text-sm text-gray-300">
							Didn't get an email?{" "}
							<span
								className={`hover:text-yellow-600 text-gray-400 duration-300 underline font-normal focus:rounded-full focus:outline focus:outline-1 focus:outline-yellow-600`}>
								try again
							</span>
						</p>
					)}
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
