import './App.css';
import RoutersLayout from './Pages/includes/RoutersLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <RoutersLayout/>
      <Footer/>
    </>
  );
}

export default App;
