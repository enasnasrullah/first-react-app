import './App.css';
import { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import MainFooter from './components/MainFooter/MainFooter.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter , Route, Redirect } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faStar} from '@fortawesome/free-solid-svg-icons';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(fas, faStar, fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);

require('typeface-montserrat')

class App extends Component {

  render() {
    return (
      <Fragment>

      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component= {Header}/>
        <Route path="/portfolio" component= {Portfolio}/>
        <Route path="/about" component= {About}/>
        <Route path="/contact" component= {Contact}/>
        <Redirect exact from="/Start-React" to="/" />
      </BrowserRouter>

        <MainFooter />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
