import React from 'react';
import axios from "axios";

const base_url = process.env.REACT_APP_API_URL;

function App() {
  const [dog, setDog] = React.useState(null);

  axios.get(base_url + '/api/data/').then((response) => setDog(response.data[0].content))
  return (
    <div className="App" style={{height:'100px', width:'100px'}}>
      <pre>
        {dog}
      </pre>
    </div>
  );
}

export default App;
