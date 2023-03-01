//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Mail from './components/Height';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';//direct to different pages as a URL router
//import { Height } from '../../backend/models/Schemas';

//Function called app exported and returning
//Mail function routed to /growth url 
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path='/growth' exact element={<Mail/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
