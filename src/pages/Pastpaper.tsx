import { MathJax } from "better-react-mathjax";
import { useEffect, useState } from "react";

type Question = {
	id: string;
	answer: string;
	question: string;
	question_type: string;
	options: string[];
	images: string[];
};

type Subject = {
	id: string;
	name: string;
};

type Board = {
	id: string;
	name: string;
};

type Data = {
	id: string;
	date: string;
	board: Board;
	subject: Subject;
	questions: Question[];
};
const Pastpaper = () => {
	const [data, setData] = useState<Data[]>([]);

	useEffect(() => {
		fetch(
			"https://backend-afriexamace.onrender.com/api/v1/pastpapers?limit=2",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="h-full max-w-full pr-4">
			<h1>Pastpapers</h1>

			<section className="h-full w-full flex flex-col gap-2 my-6 overflow-y-auto">
				<MathJax>
					{data.map((item) => {
						return (
							<div
								key={item.id}
								className="border w-full px-2 py-1">
								<h3 className="font-medium text-3xl">
									{item.board.name}
								</h3>
								<h3 className="text-5xl">
									{item.subject.name}
								</h3>
								<h3 className="font-light text-2xl">
									{new Date(item.date).getFullYear()}
								</h3>

								<div className="px-4 py-2 flex flex-col gap-2">
									{(() => {
										let questionNumber = 0;
										return item.questions.map(
											(question) => {
												questionNumber += 1;
												return (
													<div
														className="px-2 py-1"
														key={question.id}>
														<div className="w-full h-[1px] bg-white my-4"></div>
														<div className="flex flex-row gap-2 items-start">
															<span className="font-medium">
																{questionNumber}
																.
															</span>
															<p>
																{
																	question.question
																}
															</p>
														</div>
														{question.images
															.length !== 0 &&
															question.images.map(
																(image) => {
																	return (
																		<img
																			src={
																				image
																			}
																			alt={
																				image
																			}
																			className="aspect-auto w-[256px]"
																		/>
																	);
																}
															)}
														<ul className="list-disc">
															{question.options.map(
																(option) => (
																	<li>
																		{option}
																	</li>
																)
															)}
														</ul>
														<p>
															Correct Option:{" "}
															{question.answer}
														</p>
													</div>
												);
											}
										);
									})()}
								</div>
							</div>
						);
					})}
				</MathJax>
			</section>
		</div>
	);
};

export default Pastpaper;
