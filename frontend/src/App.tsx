import React from 'react';
import axios from "axios";

/*const testItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];*/

const base_url = process.env.REACT_APP_API_URL;

function App() {
  axios.get(base_url + '/api/datas/').then((data) => console.log(data))
  return (
    <div className="App">
      Hello Guys
    </div>
  );
}

export default App;
