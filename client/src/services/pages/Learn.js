import Topic from "../../components/Topic";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './learn.css';

const Learn = ({ topics }) => {
    const [topic, setTopic] = useState("")
  console.log(topics)
  return (
    <Router>
      {" "}
      <div>
        {topics.map((topic) => (
          <p>
            <Link to={`/learn/${topic.title}`} onClick={()=> setTopic(topic)}>{topic.title}</Link>
          </p>
        ))}
      </div>{" "}
      <Switch>
        <Route
          exact
          path="/learn/:topic"
          render={() => <Topic topic={topic}></Topic>}
        />

      </Switch>
    </Router>
  );
};

export default Learn;
