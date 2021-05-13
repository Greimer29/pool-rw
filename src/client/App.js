import Sidebar from './components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import Pool from './components/Pool';
// import InputTicket from './pages/InputTicket';
// import Wallet from './pages/Wallet';
// import Pool from "./components/Pool";
import Ticket from './components/Tickets';

function App() {
  return (
    <div className="App" >
      <Router>
        <Sidebar />
        <Pool/>
        <Ticket/>
      </Router>
    </div>
  );
}

export default App;