import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
// import './App.css';
import './output.css';
import Approved from './Pages/Approved/Approved';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const progressBarHandler=()=>{
    const totalScroll=document.documentElement.scrollTop;
    const windowHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const scroll=`${totalScroll/windowHeight}`;
    const progressBar=document.getElementById('progressBar');
    progressBar.style.transform=`scale(${scroll},1)`;
    // progressBar.style.opacity=`${scroll}`
  }
  useEffect(()=>{
    window.addEventListener('scroll',progressBarHandler)
  })
  return (
    <div className="App">
      <div id="progressBarContainer" >
        <div id="progressBar" ></div>
      </div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
