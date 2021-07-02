import React, {Component} from 'react';
import ReactDOM from 'react'
import './pool.scss';
import {Personas} from '../db.json';
import DAI from './logo-DAI.png';

class Pool extends Component{
    constructor(){
        super();
        this.state = {
            Personas
        }
        this.Ver = this.Ver.bind(this);
        this.Tick = this.Tick.bind(this);
    }

    Ver(e){
        const aja = document.getElementById('aja');
        if(aja.classList.contains('hide')){
            aja.classList.remove('hide');
        }else{
            aja.classList.add('hide');
        }
    }

    // Tick(){ Esto es solo unaaaaaa PRUEBAAAAAAAA
    //    const time = new Date();

    //    const hour = time.getHours();
    //    const min = time.getMinutes();
    //    const sec = time.getSeconds();

    //    const timer = `${hour}:${min}:${sec}`;
    //     console.log(timer);

    //    setTimeout(this.Tick,1000);
    // }


    render(){
        const Person = this.state.Personas.map((persona,i) => {
            return(
                <div className="container  pool-pozo" key={i}>
                    <h4>{persona.name}</h4>
                </div>
            )
        })
        return(
            <div name="Pool" className="pool">
                <div name="Pool_clock"className="pool-clock">
                    <h3 name="clock" >Timer
                    </h3>
                </div>
                    <div className="pool-container">
                        <div className="pool-img">
                            <img src={DAI} alt="jsakdfjsdkfj"/>
                        </div>
                        <div className="publicidad">
                            <p className="my-2">
                                Participa y compite por un premio de hasta:
                            </p>
                            <h1 className="premio my-0">1.000 <span className="dai"></span></h1>
                        </div>
                    <button className="btn btn-warning bg-gradient my-2 w-100" onClick={this.timer}>Participar</button>
                        <a href="/como" className="link my-2">Cómo Funciona</a>
                    <div className="pool-pozo btn w-100" onClick={this.Ver}>
                            Personas que entraron
                            <div id="aja" className="container hide">
                                {Person}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pool;