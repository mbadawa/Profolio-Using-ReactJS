import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiPython, DiJava, DiDjango } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
export default function About() {
	return (
		<div
			id="about"
			className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700"
		>
			<div className="flex flex-col gap-5 pt-10 pb-10 container ml-auto mr-auto md:pl-0 md:pr-0 pl-5 pr-5">
				<p className="text-4xl font-bold">About Me</p>
				<p>
					Self-motivated and cheerful self tough full stack web-developer
					professional with 1 year of experience currently Computer Science
					student at Blue Ridge Community College planning on transferring to
					James Madison University to get my Bachelors. Certified in full-stack
					web development from James Madison University. Familiar with HTML,
					CSS, JavaScript, ReactJS, MongoDB, MySQL, Python, Django, and Java.
				</p>
				<span className="flex items-center gap-2 text-3xl">
					<AiFillHtml5 />
					<DiCss3 />
					<SiTailwindcss />
					<SiJavascript />
					<DiReact />
					<DiJava />
					<DiPython />
					<DiDjango />
					<SiMysql />{" "}
				</span>
			</div>
		</div>
	);
}
