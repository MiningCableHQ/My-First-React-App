function Header(){
    return (
        <header id="home">
            <div className = "divHeader">
                <h1 className = "headerTitle">My React Website</h1>
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