
import "./styles/reset.css";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Routes from './routes'




function App() {
  return (
    <div className="App">
      
      <Navigation />
      <Routes/>
    </div>
  );
}

export default App;
