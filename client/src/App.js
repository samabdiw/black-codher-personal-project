import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// SERVICES
import topicService from './services/topicService';

function App() {
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    if (!topics) {
      getTopics();
    }
  });

  const getTopics = async () => {
    let res = await topicService.getAll();
    setTopics(res);
  };

  const renderTopic = (topic) => {
    return (
      <li key={topic._id}>
        <h3>
          {topic.title} 
        </h3>
        <p>{topic.header}</p>
          
        <p>{topic.paragraph}{topic.paragraph2}{topic.paragraph3}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {topics && topics.length > 0 ? (
          topics.map((topic) => renderTopic(topic))
        ) : (
          <p>No TOPICS found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
