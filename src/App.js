import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import './App.css';
import Table from './Table';

function App() {
  const [data, setData] = useState(null);

  // const [searchValue, setSearchValue] = useState('');
  const [hasSearched, setHasSearched] = useState(0);

  // useEffect(() => {
  const fetchData = async (searchedValue) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://vdjdb.cdr3.net/api/database/search',
        headers: { 'Content-Type': 'application/json' },
        data: {
          filters: [
            {
              column: 'antigen.epitope',
              // value: 'RLRPGGKKK'CLGGLLTMV,TRBV29-1*01	
              value: searchedValue,
              filterType: 'exact',
              negative: false,
            },
          ],
          paired: false,
          // species: 'HomoSapiens',
        },
      });

      // handle success
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      // handle error
      console.log(error);
    }
  };
  //   fetchData();
  // }, [searchValue]);


  const handleSearch = (newValue) => {
    setHasSearched(1);
    if (newValue !== '') {
      fetchData(newValue);
    } else {
      setData(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>VDJdb Search</h1>
        <Search onSearch={handleSearch} />
        {/* {console.log(typeof (searchValue))} */}
        {console.log(`result is: ${JSON.stringify(data)}`)}
      </header>
      <Table dataString={JSON.stringify(data)} hasSearched={hasSearched} />
    </div>
  );
}

export default App;