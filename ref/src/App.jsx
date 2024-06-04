import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';

function App() {
  const [cafes, setCafes] = React.useState([
    {
      picture:
        'https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg',
      title: 'DDSK SAIGON KITCHEN',
      address: 'ss, 135-0061, Tokyo',
      criteria: [],
    },
    {
      picture:
        'https://laptopfriendly.co/images/places/tokyo/common/common--tokyo.jpg',
      title: 'COMMON',
      address: '106-0032, Tokyo',
      criteria: ['Stable Wi-Fi', 'Power sockets', 'Quiet', 'Coffee', 'Food'],
    },
    {
      picture:
        'https://laptopfriendly.co/images/places/tokyo/brooklyn-parlor-shinjuku/brooklyn-parlor-shinjuku%20shinjuku-city%20brooklyn-parlor-shinjuku-shinjuku-city%20.jpg',
      title: 'BROOKLYN PARLOR SHINJUKU',
      address:
        'Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022, Tokyo',
      criteria: ['Stable Wi-Fi', 'Power sockets', 'Quiet', 'Coffee', 'Food'],
    },
  ]);
  // OPTIONAL: USE EFFECT VERSION
  // const [keyword, setKeyword] = React.useState("");

  // React.useEffect(() => {
  //   const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
  //   const params = (keyword !== "") ? `?title=${keyword}` : "";
  //   fetch(url + params)
  //     .then(response => response.json())
  //     .then((data) => {
  //       setCafes(data);
  //     });
  // }, [keyword]);

  return (
    <div className="app-frame">
      {/* OPTIONAL USE EFFECT VERSION  */}
      {/* <Navbar setKeyword={setKeyword}/> */}
      <Navbar setCafes={setCafes} />
      <div className="app-body">
        <Sidebar setCafes={setCafes} />
        <CafeList cafes={cafes} />
      </div>
    </div>
  );
}

export default App;
