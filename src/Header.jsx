function Header(){
    return (
        <header id="home">
            <div className = "divHeader">
                <div>
                    <img src="mchqlogo.svg" alt="Logo" className = "headerLogo"></img>
                    <h1 className = "headerTitle">My React Website</h1>
                </div>
                <nav className = "headerNav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                        <li><a href="#skills">Skills</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );  
}

export default Header