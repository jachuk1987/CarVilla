import logo from './logo.svg';
import './App.css';
import HomeSection from './Components/HomeSection';
import ServiceSection from './Components/ServiceSection';
import NewCarsSection from './Components/NewCarsSection';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <ServiceSection />
      <NewCarsSection />
    </div>
  );
};

export default App;
