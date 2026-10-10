function Header({ isDark, onToggleDark }){
    return (
        <header className="sticky top-0 z-10 bg-white shadow-md text-left font-['National_Park',Arial,sans-serif] shadow-[5px_5px_5px_hsl(0,0%,22%,0.253)] dark:bg-slate-900 dark:text-slate-100">
            <div className = "flex flex-col items-center gap-3 px-[clamp(1rem,5vw,4rem)] py-3 sm:flex-row sm:justify-between sm:px-8">
                <div className="flex items-center gap-4">
                    <img src="mchqlogo.svg" alt="Logo" className="w-[50px] h-[50px]" />
                    <h1 className = "text-xl font-bold text-[hsl(35,67%,43%)] dark:text-amber-300">My React Website</h1>
                </div>
                <nav className = "flex flex-wrap items-center gap-3 list-none p-0">
                    <button
                        type="button"
                        onClick={onToggleDark}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        aria-pressed={isDark}
                        className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-amber-300 dark:focus-visible:outline-amber-300"
                    >
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                        </svg>
                    </button>
                    <ul className="m-0 flex flex-wrap gap-[clamp(0.75rem,2vw,1.5rem)] p-0 text-[hsl(0,0%,39%)] dark:text-slate-300">
                        <li className="list-none"><a href="#home" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35,67%,43%)] dark:hover:text-amber-300">Home</a></li>
                        <li className="list-none"><a href="#aboutme" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35,67%,43%)] dark:hover:text-amber-300">About Me</a></li>
                        <li className="list-none"><a href="#hobbies" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35,67%,43%)] dark:hover:text-amber-300">Hobbies</a></li>
                        <li className="list-none"><a href="#skills" className="font-bold text-inherit no-underline visited:text-inherit hover:text-[hsl(35,67%,43%)] dark:hover:text-amber-300">Skills</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );  
}

export default Header