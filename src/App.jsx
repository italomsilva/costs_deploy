import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App(){
    return(
        <Router>
            <Navbar/>
            <Container customClass="customMain">
                <Routes>
                    <Route exact path='costs_deploy' element={<Home />}/>
                    <Route exact path='costs_deploy/company' element={<Company/>}/>
                    <Route exact path='costs_deploy/contact' element={<Contact/>}/>
                    <Route exact path='costs_deploy/newproject' element={<NewProject/>}/>
                    <Route exact path='costs_deploy/projects' element={<Projects/>}></Route>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    );
}

export default App;