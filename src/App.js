import "./App.css";
import Home from "./containers/Home";
import Header from "./component/Header";
import Hero from "./component/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./containers/Contact";
import Post from "./containers/Post";
import About from "./containers/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/Home" exact component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Post" component={Post} />
        <Route path="/About" component={About} />
      </div>
    </Router>
  );
}

export default App;
