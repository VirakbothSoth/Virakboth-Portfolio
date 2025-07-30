import { SiFacebook, SiLinkedin, SiGithub, SiLeetcode, SiHackerrank, SiCredly, SiCodewars, SiTelegram, SiFreecodecamp } from "react-icons/si"

const Footer = () => {
	return (
		<footer className="bg-secondary border-t-[0.5px] border-border w-full p-5" id="contact">
			<div>
				<h2 className="font-bold mb-6">Find Me!</h2>
				<div className="flex justify-center items-center space-x-4">
					<a
						href="/gthb"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<SiGithub className="w-10 h-10" />
					</a>
					<a
						href="/fb"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-blue-600 transition-colors"
					>
						<SiFacebook className="w-10 h-10" />
					</a>
					<a
						href="/t"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-blue-400 transition-colors"
					>
						<SiTelegram className="w-10 h-10" />
					</a>
					<a
						href="/lnkdin"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-cyan-700 transition-colors"
					>
						<SiLinkedin className="w-10 h-10" />
					</a>
					<a
						href="/cdly"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-[#FF6B00] transition-colors"
					>
						<SiCredly className="w-10 h-10" />
					</a>
					<a
						href="/ltcd"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-yellow-500 transition-colors"
					>
						<SiLeetcode className="w-10 h-10" />
					</a>
					<a
						href="/hrnk"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<SiHackerrank className="w-10 h-10" />
					</a>
					<a
						href="/cdwr"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-red-400 transition-colors"
					>
						<SiCodewars className="w-10 h-10" />
					</a>
					<a
						href="/fcc"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-white transition-colors"
					>
						<SiFreecodecamp className="w-10 h-10" />
					</a>
				</div>
				<p className="mt-8">
					My Email:{" "}
					<a className="font-bold" href="mailto:virakbothsoth@gmail.com">
						virakbothsoth@gmail.com
					</a>
				</p>
				<p className="text-sm text-center text-gray-500">
					© 2025 - Virakboth Soth. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
