import { useState } from 'react';
import Header from './components/layout/Header.jsx';
import Main from './components/layout/MainLayout.jsx';
import Footer from './components/layout/Footer.jsx';

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