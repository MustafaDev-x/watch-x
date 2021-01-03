
import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home';
import Shows from './pages/shows';
import Show from './pages/show';
import Movie from './pages/movie';

function App() {
  return (
    <div className="App space">
<Router>
  <Navbar/>
  <Switch>
    
    
    <Route path="/TV-Show" exact  component={Shows}/>
    <Route path="/TV-Show/:page" exact  component={Shows}/>
    <Route path="/TV-Show/:page/:id" exact component={Show}/>
    
    <Route path="/" exact  component={Home}/>
    <Route path="/:page" exact component={Home}/>
    <Route path="/:page/:id" exact component={Movie}/>
    
    
  </Switch>
  <div className="end mt-5 p-2"><h6 className="mt-5" style={{backgroundColor: "#000"}}>© 2021 - Template designed & developed by <a href="https://mustafadev.ml">MustafaDev</a>.</h6></div>
</Router>
    </div>
  );
}

export default App;
