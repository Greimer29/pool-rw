import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Pool from './components/Pool';
import {Personas} from './db.json';

import './index.scss';

import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';


class App extends Component {
  constructor() {
      super();
      this.state = {
          Personas
      }
  }
  render() {
      const user = this.state.Personas[1]
      return (
        <Router>
            <div className="flex">
                <IconContext.Provider value={{size:'1.5rem',className:"mt-2"}}>
                    <div id="sidebar" className="sidebar">
                        <div className="user">
                            <div className="user-option-img text-center">
                                <FaIcons.FaUserAlt size="1.8rem" className="mt-2"/>
                            </div>
                            <div className="user-description">
                                <h5>{user.name +" "+ user.apellido}</h5>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="option">
                                <div className="container">
                                    <Link to="/tickets" className="link">
                                        <div className="option-img text-center">
                                            <FaIcons.FaTicketAlt />
                                        </div>
                                        <div className="option-description">
                                            <h6>Tickets</h6><span className="badge bg-success ms-4">{user.tickets}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="option">
                                <div className="container">
                                    <Link to="/billetera" className="link">
                                        <div className="option-img text-center">
                                            <FaIcons.FaWallet />
                                        </div>
                                        <div className="option-description">
                                            <h6>Billetera</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="option">
                                <div className="container">
                                    <Link to="/ajustes" className="link">
                                        <div className="option-img text-center">
                                            <FaIcons.FaCog/>
                                        </div>
                                        <div className="option-description">
                                            <h6>Ajustes</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </IconContext.Provider>
                <div className="container">
                    <Pool/>
                </div>
            </div>
        </Router>
      )
  }
}

export default App;