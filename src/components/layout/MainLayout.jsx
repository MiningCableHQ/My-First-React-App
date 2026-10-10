import AboutMe from '../about/AboutMe.jsx'
import Hobbies from '../hobbies/Hobbies.jsx'
import Skills from '../skills/Skills.jsx'
import Contact from '../contact/Contact.jsx'

function MainLayout() {
    return(
        <main>
            <AboutMe/>
            <Hobbies/>
            <Skills/>
            <Contact/>
        </main>
    );
}

export default MainLayout;