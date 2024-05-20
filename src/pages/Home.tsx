import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

type Board = {
	id: string;
	name: string;
	website: string;
	subjects: Subject[];
};

type Topic = {
	id: string;
	name: string;
	content: string;
	description: string;
	subject_id: string;
	created_at: Date;
	updated_at: Date;
};

type Subject = {
	id: string;
	name: string;
	syllabus: string;
	topic: Topic[];
	created_at: Date;
	updated_at: Date;
};

const Home = () => {
	const [activeItem, setActiveItem] = useState<Board | "ALL">("ALL");
	const [boards, setBoards] = useState<Board[]>([]);
	const [active, setActive] = useState<{
		isActive: boolean;
		subject?: Subject;
		board?: Board;
	}>({
		isActive: false,
		subject: undefined,
		board: undefined,
	});
	const [displayContent, setDisplayContent] = useState<{
		display: boolean;
		topic?: Topic;
	}>({
		display: false,
		topic: undefined,
	});

	useEffect(() => {
		fetch("http://192.168.0.167:8000/api/v1/boards", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBoards(data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="w-scren h-screen flex flex-row">
			<aside className="w-[300px] py-8 px-4 bg-neutral-950">
				<ul>
					<li
						className="cursor-pointer"
						onClick={() => {
							setActiveItem("ALL");
							if (active.isActive)
								setActive({
									isActive: false,
								});

							if (displayContent.display)
								setDisplayContent({ display: false });
						}}>
						All
					</li>
					{boards.map((board) => {
						return (
							<li
								key={board.id}
								className="cursor-pointer"
								onClick={() => {
									setActiveItem(board);
									if (active.isActive)
										setActive({
											isActive: false,
										});

									if (displayContent.display)
										setDisplayContent({ display: false });
								}}>
								{board.name}
							</li>
						);
					})}
				</ul>
			</aside>

			<section className="grid w-full h-full py-8 px-4 overflow-y-auto">
				{/* Subjects List View */}
				{active.isActive && (
					<div>
						<h3>
							{active.subject?.name} - {active.board?.name}
						</h3>
						{active.subject?.topic.map((topic) => (
							<div
								key={topic.id}
								className="outline outline-1 h-fit px-4 my-2 py-4 cursor-pointer list-none"
								onClick={() =>
									setDisplayContent({
										display: true,
										topic,
									})
								}>
								<h3>{topic.name}</h3>
								<p className="text-sm font-light text-neutral-200">
									{topic.description}
								</p>
							</div>
						))}
					</div>
				)}

				{displayContent.display && (
					<div className="mt-12">
						<h3 className="text-2xl font-bold underline mb-1">
							{displayContent.topic?.name}
						</h3>
						{/* <UseEditor /> */}
						<div
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(
									displayContent.topic?.content || ""
								),
							}}></div>
					</div>
				)}

				{/* Viewing all boards, and subjects */}
				<section className="flex flex-col gap-8">
					{!active.isActive &&
						activeItem === "ALL" &&
						boards.map((board) => {
							return (
								<div key={board.id}>
									<h3 className="font-medium text-2xl">
										{board.name} - {board.subjects.length}{" "}
										subjects
									</h3>
									<div className="flex flex-col gap-1 font-light">
										{board.subjects.map((subject) => {
											return (
												<li
													key={subject.id}
													onClick={() =>
														setActive({
															isActive: true,
															subject,
															board,
														})
													}
													className="outline outline-1 h-fit px-4 my-2 py-4 cursor-pointer list-none">
													<div>
														{subject.name} -{" "}
														{subject.topic.length}{" "}
														topics
													</div>
												</li>
											);
										})}
									</div>
								</div>
							);
						})}
				</section>

				{/* Viewing a specific board */}
				<section>
					{!active.isActive && activeItem !== "ALL" && (
						<div>
							<h3 className="font-medium text-2xl">
								{activeItem.name} - {activeItem.subjects.length}{" "}
								subjects
							</h3>

							{activeItem.subjects.map((subject) => (
								<li
									key={subject.id}
									onClick={() =>
										setActive({
											isActive: true,
											subject,
											board: activeItem,
										})
									}
									className="outline outline-1 h-fit px-6 my-4 py-4 cursor-pointer list-none">
									<div>
										{subject.name} - {subject.topic.length}{" "}
										topics
									</div>
								</li>
							))}
						</div>
					)}
				</section>
			</section>
		</div>
	);
};

export default Home;
