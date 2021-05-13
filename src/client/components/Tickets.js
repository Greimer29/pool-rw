import React, {Component} from 'react';

class Ticket extends Component{
    constructor(){
        super();
        this.state = {
            tickets:""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {name,value} = e.target;
        console.log(name,value, this.state.tickets)
        this.setState({
            [name]:value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        alert(this.state.tickets)
    }
    
    render(){
        return(
            <div className="container me-4 pt-4">
            <div className="card col-5 text-center">
                <div className="card-header">
                    <h3>Ingrese Tickets a solicitar</h3>
                </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="input-group">
                        <input 
                            type="text"
                            className="form-control rounded mx-3"
                            name="newTickets"
                            onChange={this.handleInput}
                        />
                        <button className="btn"> 
                            <span className="badge bg-dark y-100 w-100">{this.state.tickets}</span>
                        </button>
                    </div>
                    <button className="btn btn-primary my-2"> Enviar </button>
                </form>
            </div>
            </div>
        )
    }
}

export default Ticket;