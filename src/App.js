import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {Container, Header, HomeContent, AboutUs, Services, Buy, Rent, NewProjects, Villa, Apartments,  PrivacyPolicy, Blogs, Contact, Footer, MoreDetails} from './components/exports'

function App() {
  return (
    <div className="App">
      <Router basename='/Real-Estate'>
        <Header/>
          <Container>
            <Routes>
              <Route path="/" element={<HomeContent/>}/>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/Services" element={<Services/>}/>
              <Route path='/Buy' element={<Buy/>}/>
              <Route path='/Rent' element={<Rent/>}/>
              <Route path='/NewProjects' element={<NewProjects/>}/>
              <Route path='/MoreDetails/:id' element={<MoreDetails/>}/>
              <Route path='/Villa' element={<Villa/>}/>
              <Route path='/Apartments' element={<Apartments/>}/>
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
              <Route path="/Blogs" element={<Blogs/>}/>
              <Route path="/Contact" element={<Contact/>}/>
            </Routes>
          </Container>
        <Footer/>
      </Router>
    </div>
  );

}

export default App;
