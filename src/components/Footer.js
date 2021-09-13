import React from "react";
export default function Footer() {
	return (
		<div className="bg-gray-100 text-center pt-28 pb-28 dark:text-gray-400 pl-5 pr-5 dark:bg-gray-700">
			<div className="flex flex-col gap-2">
				<p className="font-extrabold text-transparent lg:h-20 text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 dark:from-yellow-400 dark:to-pink-300">
					Looking for a freelance work?
				</p>
				<p className="text-lg flex items-center justify-center gap-1">
					Send me a message via an
					<a
						href="mailto:contact@mohamad.tech"
						className="border-b border-yellow-400"
					>
						email
					</a>
				</p>
			</div>
		</div>
	);
}
