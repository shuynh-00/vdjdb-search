import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://cors-anywhere.herokuapp.com/https://vdjdb.cdr3.net/api/database/search',
          headers: { 'Content-Type': 'application/json' },
          data: {
            filters: [
              {
                column: 'antigen.epitope',
                value: 'RLRPGGKKK',
                // value: 'RLRPGGKKK',
                filterType: 'exact',
                negative: false,
              },
            ],
            paired: true,
          },
        });

        // handle success
        console.log(response.data);
      } catch (error) {
        // handle error
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (newValue) => {
    setSearchValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>VDJdb Search</h1>
        {/* {data ? (
          <div>
            <h2>Response Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
        {console.log(data)} */}
        <Search onSearch={handleSearch} />
        {console.log(searchValue)}
      </header>
    </div>
  );
}

export default App;