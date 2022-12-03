//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Height from './components/Height';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path='/growth' exact element={<Height/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
