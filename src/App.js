import './App.css';
import NavBar from './Components/Nav/NavBar';
import Footer from './Components/Footer/Footer';
import MainContent from './Components/MainContent/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Friends from './Views/Friends';
import TripPlan from './Views/TripPlan';

import { useJsApiLoader } from '@react-google-maps/api'

function App() {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDQp8uhGQ8XJglEMEsQ-39xgVBM-7w5sno",
    libraries: ['places'],
  })

  if (!isLoaded){
    return <div>Not loaded</div>    
  }   
  return (    
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<MainContent isMapLoaded={isLoaded}/> } />
          <Route path='/friends' element={<Friends />} />
          <Route path='/trip-plan' element={<TripPlan isMapLoaded={isLoaded}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}


export default App;
