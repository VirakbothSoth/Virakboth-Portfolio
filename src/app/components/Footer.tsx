import { SiFacebook, SiLinkedin, SiGithub, SiLeetcode, SiHackerrank, SiCredly, SiCodewars, SiTelegram, SiFreecodecamp } from "react-icons/si"

const Footer = () => {
	return (
		<footer className="bg-[#01111d] border-t-[0.5px] border-[#272b3b] w-full p-5" id="contact">
			<div>
				<h2 className="font-bold mb-6">Find Me!</h2>
				<div className="flex justify-center items-center space-x-4">
					<a
						href="https://github.com/VirakbothSoth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<SiGithub className="w-10 h-10" />
					</a>
					<a
						href="https://facebook.com/VirakbothSothSam"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-blue-600 transition-colors"
					>
						<SiFacebook className="w-10 h-10" />
					</a>
					<a
						href="https://t.me/VirakbothSoth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-blue-400 transition-colors"
					>
						<SiTelegram className="w-10 h-10" />
					</a>
					<a
						href="https://linkedin.com/in/virakboth-soth-b1b2b8306/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-cyan-700 transition-colors"
					>
						<SiLinkedin className="w-10 h-10" />
					</a>
					<a
						href="https://www.credly.com/users/virakboth-soth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-[#FF6B00] transition-colors"
					>
						<SiCredly className="w-10 h-10" />
					</a>
					<a
						href="https://leetcode.com/u/VirakbothSoth/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-yellow-500 transition-colors"
					>
						<SiLeetcode className="w-10 h-10" />
					</a>
					<a
						href="https://hackerrank.com/profile/virakbothsoth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black transition-colors"
					>
						<SiHackerrank className="w-10 h-10" />
					</a>
					<a
						href="https://codewars.com/users/VirakbothSoth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-red-400 transition-colors"
					>
						<SiCodewars className="w-10 h-10" />
					</a>
					<a
						href="https://freecodecamp.org/virakboth_soth"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black transition-colors"
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
