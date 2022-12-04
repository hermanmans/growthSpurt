//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Height from './components/Height';
import Result from './components/Results';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';//direct to different pages as a URL router

//Function called app exported and returning 
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path='/growth' exact element={<Height/>}/>
          <Route path='/results' exact element={<Result/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
