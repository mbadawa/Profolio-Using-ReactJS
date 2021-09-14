import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Hero() {
	const [active, isActive] = useState(false);
	function DarkMode() {
		const checkbox = document.querySelector(".checkbox");
		const html = document.querySelector("html");
		checkbox.checked
			? html.classList.add("dark")
			: html.classList.remove("dark");
		isActive(active);
	}

	return (
		<div className="hero pr-5 pt-10 pb-10">
			<header>
				<div className="grid grid-rows gap-3 container ml-auto mr-auto md:pl-0 md:pr-0 pl-5 pr-5">
					<li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
						<BsSun />
						<label class="switch">
							<input type="checkbox" className="checkbox" onClick={DarkMode} />
							<span class="slider round dark:bg-gray-600"></span>
						</label>
						<BsMoon />
					</li>
					<p className="font-extrabold text-transparent lg:text-6xl text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 dark:from-yellow-400 dark:to-pink-400">
						Hi, I’m Mohamad. <br /> Full-Stack Web Developer.
					</p>
					<span className="flex items-center gap-5">
						<a
							className="bg-blue-500 dark:bg-gray-700 dark:text-gray-400 rounded text-gray-100 p-3 w-28 flex justify-center"
							href="#project"
						>
							Project
						</a>
						<a
							className="flex items-center gap-2 border-b-2 border-blue-500 dark:border-gray-700 dark:text-gray-400 p-3 w-28 flex justify-center text-blue-500"
							href="https://mohamad.tech/resume.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Resume
							<BsArrowRight />
						</a>
					</span>
				</div>
			</header>
		</div>
	);
}
