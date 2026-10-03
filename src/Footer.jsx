function Footer(){
    return(
        <footer className="bg-white border-t-2 border-t-[hsla(0,0%,22%,0.253)] dark:bg-slate-900 dark:border-t-slate-700 dark:text-slate-300">
            <p>&copy; {new Date().getFullYear()} My React Website</p>
        </footer>
    );
}

export default Footer;