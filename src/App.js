import "./App.css";
import Header from './components/Header'
import Home from './components/Home'
import Trailer from './components/Trailer'
import {Route} from 'react-router-dom'
function App() {
  return (
    
      <div className="App">
         <Header/>
        
         <Route exact path="/" component={Home} />
         <Route exact path="/Trailer/:id" component={Trailer} />
       
        
       
       
      </div>
  );
}

export default App;
