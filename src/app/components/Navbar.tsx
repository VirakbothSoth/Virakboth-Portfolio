const Navbar = () => {
    return (
        <nav className="bg-secondary border-b-[0.5px] border-border p-4 rounded-full">
            <div className="container mx-auto flex justify-end items-center">
                <ul className="flex space-x-8 ml-auto">
                    <li>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#journey"
                            className="text-gray-300 hover:text-white"
                        >
                            Journey
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-gray-300 hover:text-white"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
