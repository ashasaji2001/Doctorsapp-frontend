import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRest from './Components/ViewRest'

function App() {
  return (
    <div className="App">
     {/* <h1 className='text-center text-dark'><i class="fa-solid fa-user-doctor"></i>Doctor's Appointment App</h1> */}
     <header>
      <Header/>
     </header>
      <section>
      <Routes>
<Route path='/' element={<AllRest/>}/>
<Route path='/view/:id' element={<ViewRest/>}/>

      </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
