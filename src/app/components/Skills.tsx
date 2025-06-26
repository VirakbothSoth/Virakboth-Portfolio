import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { FaStar, FaJava } from "react-icons/fa";
import {
	SiScratch,
	SiPython,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiBootstrap,
	SiTailwindcss,
	SiDjango,
	SiNodedotjs,
	SiLinux,
	SiTypescript,
	SiExpress
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const txt = "Hello World!";
const htm = `<h1>${txt}</h1>`;

const helloWorldSnippets = {
	txt: txt,
	NoHi: " ",
	Scratch: `say "${txt}"`,
	Python: `print("${txt}")`,
	Java: `System.out.println("${txt}");`,
	CS: `Console.WriteLine("${txt}");`,
	HTML: htm,
	JS: `console.log("${txt}");`,
	React: `const App = () => return ${htm}`,
	Next: `export default () => return ${htm}`,
	Django: `return HttpResponse("${txt}")`,
	Node: `res.end("${txt}");`,
	Linux: `echo "${txt}"`,
};

const Skills = () => {
	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto">
				<h2 className="section-title">
					<FaStar className="skill-icon" /> Skills
				</h2>
				<div className="flex justify-center">
					<div className="flex flex-wrap justify-center gap-8"></div>
					<div className="flex flex-wrap justify-center gap-8">
						{/* Scratch */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div className="">
									<SiScratch className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									Scratch
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.Scratch}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										Scratch
									</div>
									<div className="text-l font-medium">
										Mastered!
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-orange-400 w-[100%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* Python */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div className="">
									<SiPython className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									Python
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.Python}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										Python
									</div>
									<div className="text-l font-medium">
										96%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-blue-400 w-[96%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* Java */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<FaJava className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									Java
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.Java}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										Java
									</div>
									<div className="text-l font-medium">
										52%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-yellow-400 w-[52%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* C# */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div className="">
									<TbBrandCSharp className="skill-icon" />
								</div>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.CS}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										C#
									</div>
									<div className="text-l font-medium">
										60%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-blue-500 w-[60%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* HTML */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<SiHtml5 className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									HTML & CSS
								</span>
								<div>
									<SiCss3 className="skill-icon" />
								</div>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.HTML}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										HTML & CSS
									</div>
									<div className="text-l font-medium">
										Mastered!
									</div>
								</div>
							</div>
							<div className="flex mb-2 items-center justify-between">
								<div className="bg-bg rounded-full h-2.5 w-full">
									<div className="bg-red-400 w-[100%] h-2.5 rounded-full"></div>
								</div>
							</div>
						</div>
						{/* CSS Frameworks */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<SiCss3 className="skill-icon" />
								<span className="font-semibold text-2xl">
									CSS Frameworks
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1 pb-4">
								{helloWorldSnippets.NoHi}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block ">
											<SiTailwindcss />
										</span>
										Tailwind
									</div>
									<div className="text-l font-medium">
										Mastered!
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-sky-500 w-[100%] h-2.5 rounded-full"></div>
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block ">
											<SiBootstrap />
										</span>
										Bootstrap (no longer in use)
									</div>
									<div className="text-l font-medium">
										Mastered!
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-blue-600 w-[100%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* JavaScript */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<SiJavascript className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									JavaScript
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.JS}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block skill-icon">
											<SiJavascript />
										</span>
										JavaScript
									</div>
									<div className="text-l font-medium">
										80%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-green-400 w-[80%] h-2.5 rounded-full"></div>
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block skill-icon">
											<SiTypescript />
										</span>
										TypeScript (Basics)
									</div>
									<div className="text-l font-medium">
										42%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-blue-400 w-[42%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<SiNodedotjs className="skill-icon " />
								</div>
								<span className="font-semibold text-2xl">
									Node.js
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1 pb-4">
								{helloWorldSnippets.Node}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block skill-icon">
											<SiNodedotjs />
										</span>
										Node
									</div>
									<div className="text-l font-medium">
										40%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-green-400 w-[40%] h-2.5 rounded-full"></div>
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block skill-icon">
											<SiExpress />
										</span>
										Express
									</div>
									<div className="text-l font-medium">
										20%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-gray-800 w-[20%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* React */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<SiReact className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									React
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.React}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block skill-icon">
											<RiReactjsFill />
										</span>
										React
									</div>
									<div className="text-l font-medium">
										Mastered!
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="flex mb-2 items-center justify-between">
											<div className="bg-bg rounded-full h-2.5 w-full">
												<div className="bg-blue-400 w-[100%] h-2.5 rounded-full"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										<span className="inline-block skill-icon">
											<RiNextjsFill />
										</span>
										Next.js
									</div>
									<div className="text-l font-medium">
										80%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-gray-700 w-[80%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* Django */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<SiDjango className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									Django
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.Django}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										Django
									</div>
									<div className="text-l font-medium">
										30%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-orange-400 w-[30%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* Linux */}
						<div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-[#01111d] text-[#eeeeff] border-[0.5px] border-[#272b3b] rounded-md text-center hover:shadow-xl hover:p-5 duration-500">
							<div className="flex items-center justify-center mb-2 text-3xl gap-2">
								<div>
									<SiLinux className="skill-icon" />
								</div>
								<span className="font-semibold text-2xl">
									Linux
								</span>
							</div>
							<div className="text-xs text-gray-400 mb-1">
								{helloWorldSnippets.Linux}
							</div>
							<div className="relative pt-1">
								<div className="flex mb-2 items-center justify-between">
									<div className="text-l font-medium">
										Linux Bash Commands
									</div>
									<div className="text-l font-medium">
										10%
									</div>
								</div>
								<div className="flex mb-2 items-center justify-between">
									<div className="bg-bg rounded-full h-2.5 w-full">
										<div className="bg-green-400 w-[10%] h-2.5 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
