import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';

function App() {
  const [cafes, setCafes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then((data) => {
        setCafes(data);
      });
  }, [keyword]);

  return (
    <div className='app-frame'>
      <Navbar setKeyword={setKeyword}/>
      <div className="app-body">
        <Sidebar setCafes={setCafes} />
        <CafeList cafes={cafes}/>
      </div>
    </div>
  );
}

export default App;