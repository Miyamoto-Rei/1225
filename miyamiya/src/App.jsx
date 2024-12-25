// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useState } from "react";
import storeData from "./storeData.json";

const App = () => {
  const [region, setRegion] = useState("Tohoku"); 

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  const stores = storeData.regions[region]; 

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>店舗情報</h1>
      <label>
        地域を選択:
        <select value={region} onChange={handleChange}>
          <option value="Tohoku">東北</option>
          <option value="Kanto">関東</option>
          <option value="Kansai">関西</option>
        </select>
      </label>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {stores.map((store, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h2>・{store.storeName}</h2>
            <p>住所: {store.address}</p>
            <p>電話番号: {store.phoneNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
