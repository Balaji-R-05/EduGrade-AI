import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import LandingPage from './components/landing page/landingpage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
