import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Learn from './pages/Learn';


// SERVICES
import topicService from './services/topicService';


function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function getTopics () {
      let res = await topicService.getAll();
      setTopics(res);
    };
    getTopics()
  },[]);

  //  errot not showing titles of topics when called
  // console.log(topics.filter(topic => topic.title))
  return (<Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/learn">Learn</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        
        
        <Route path="/learn">
          <Learn titles={topics} />
        </Route>
        
      </Switch>
    </div>
  </Router>)

}


  

export default App;
