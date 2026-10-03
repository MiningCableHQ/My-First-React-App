function Header(){
    return (
        <header className="sticky top-0 z-10 bg-white shadow-md text-left font-['National_Park',Arial,sans-serif] shadow-[5px_5px_5px_hsl(0,0%,22%,0.253)]">
            <div className = "flex flex-col items-center gap-3 px-[clamp(1rem,5vw,4rem)] py-3 sm:flex-row sm:justify-between sm:px-8">
                <div className="flex items-center gap-4">
                    <img src="mchqlogo.svg" alt="Logo" className="w-[50px] h-[50px]" />
                    <h1 className = "text-xl font-bold text-[hsl(35,67%,43%)]">My React Website</h1>
                </div>
                <nav className = "flex flex-wrap gap-3 list-none p-0">
                    <ul className="m-0 flex flex-wrap gap-[clamp(0.75rem,2vw,1.5rem)] p-0 text-[hsl(0,0%,39%)]">
                        <li className="font-bold text-inherit no-underline hover:text-amber-700 list-none"><a href="#home" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35, 67%, 43%)]">Home</a></li>
                        <li className="font-bold text-inherit no-underline hover:text-amber-700 list-none"><a href="#aboutme" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35, 67%, 43%)]">About Me</a></li>
                        <li className="font-bold text-inherit no-underline hover:text-amber-700 list-none"><a href="#hobbies" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35, 67%, 43%)]">Hobbies</a></li>
                        <li className="font-bold text-inherit no-underline hover:text-amber-700 list-none"><a href="#skills" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35, 67%, 43%)]">Skills</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );  
}

export default Header