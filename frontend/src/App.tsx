import React, { useEffect } from 'react';
import axios from "axios";
import MainScreen from './components/MainScreen';

export const base_url = 'https://django-test-proj-production.up.railway.app';
export const data_url = base_url + '/api/data/';

function App() {
  const [data, setData] = React.useState(null);
  const [fetching, setFetching] = React.useState(true);

  useEffect(() => {
    // not 'await' as no point in doing anything else until data loaded
    axios.get(data_url).then((response) => {
      setData(response.data);
      setFetching(false);
    });
  }, [])


  return (
    <React.Fragment>
      {fetching && <div></div>}
      {!fetching &&
      <div>
        <h1 style={{margin: '10px',}}>
          Welcome To Matthew's Cool ASCII Website
        </h1>
        <p style={{margin: '10px', fontSize: '30px'}}>
          Feel free to add new ASCII images to see that the API and Database work!
        </p>
        <MainScreen data={data}/>
      </div> }
    </React.Fragment>
  );
}

export default App;
