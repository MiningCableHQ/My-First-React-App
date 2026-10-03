import { useState } from 'react';
import Header from './Header.jsx';
import Main from './MainLayout.jsx';
import Footer from './Footer.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);

  return(
    <>
      <div id="home" className={isDark ? 'dark' : ''}>
        <Header isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App