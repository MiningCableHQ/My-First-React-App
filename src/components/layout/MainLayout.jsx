import AboutMe from '../about/AboutMe.jsx'
import Hobbies from '../hobbies/Hobbies.jsx'
import Skills from '../skills/Skills.jsx'

function MainLayout() {
    return(
        <main>
            <AboutMe/>
            <Hobbies/>
            <Skills/>
        </main>
    );
}

export default MainLayout;