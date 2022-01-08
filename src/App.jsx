import Topbar from './components/topbar/Topbar';
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import {Helmet} from "react-helmet";

import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact" 
import "./app.scss"
import {useState} from "react"
import Menu from "./components/menu/Menu"



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Santanu Kumar Paikaray</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="my portfolio icon and titles" />
            </Helmet>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
       
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
