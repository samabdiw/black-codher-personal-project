import React, { useState, useEffect } from "react";
import globalStyle from './globalStyles';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Learn from "./services/pages/Learn";
import About from "./services/pages/About/About";
import Home from "./services/pages/Homepage/Home";
import Quiz from "./services/pages/Quiz";
import { Navbar, Footer } from "./components";
import ScrollToTop from './components/ScrollToTop';



// SERVICES
import topicService from "./services/topicService";

function App() {
  const [topics, setTopics] = useState([]);
  console.log(topics.map((topic) => topic.title));
  useEffect(() => {
    async function getTopics() {
      let res = await topicService.getAll();
      setTopics(res);
    }
    getTopics();

  }, []);


  
  //  errot not showing titles of topics when called
  // console.log(topics.filter(topic => topic.title))
  return (
    
      <Router>
        <nav>
          <globalStyle />
          <ScrollToTop />
          <Navbar />
          {/* <ul>
            <li>
              <Link to="/home">Home</Link>
              
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/learn">Learn</Link>
            </li>

            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul> */}
        </nav>



         {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
          
        
         <Switch>
         <Route
            exact
            path="/home"
            render={() => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/About"
            render={() => (
              <React.Fragment>
                <About />
              </React.Fragment>
            )}
          />

          <Route path="/learn">
            <Learn topics={topics} />
          </Route>
        
        <Route
            exact
            path="/Quiz"
            render={() => (
              <React.Fragment>
                <Quiz />
              </React.Fragment>
            )}
          />

        </Switch>
        <Footer />
    </Router>
  );
}


export default App;
