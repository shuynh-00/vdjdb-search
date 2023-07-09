import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://cors-anywhere.herokuapp.com/https://vdjdb.cdr3.net/api/database/search',
          {
            filters: [
              {
                column: "cdr3",
                value: "CAAAASGGSYIPTF",
                filterType: "exact",
                negative: false
              }
            ]
          },
          {
            headers: { "Content-Type": "application/json" }
          }
        );

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>VDJdb Search</h1>
        {data ? (
          <div>
            <h2>Response Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;