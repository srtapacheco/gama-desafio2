import React from 'react';
import loginImg from '../login2.gif'


export class Client extends React.Component {
    
    constructor(props){
        super(props);
        this.listClient = JSON.parse(window.localStorage.getItem('lista-de-clientes') || "[]");
        this.clients = {
            name: '',
            cpf:'',
            email: '',
            contact: '',
            address:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event, attribute) {
        this.clients[attribute] = event.target.value
        this.forceUpdate();
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.clients.name);
        this.listClient = JSON.parse(window.localStorage.getItem('lista-de-clientes') || "[]");
        this.listClient.push(this.clients);
        window.localStorage.setItem('lista-de-clientes', JSON.stringify(this.listClient));
        this.forceUpdate();
        event.preventDefault();
    }
    
    deleteData(index){
        this.listClient = JSON.parse(window.localStorage.getItem('lista-de-clientes') || "[]");
        this.listClient.splice(index, 1);
        window.localStorage.setItem('lista-de-clientes', JSON.stringify(this.listClient));
        this.forceUpdate();
    }

    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
                <div className='header'> Gestão de cadastros </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='content'>
                            <div className='image'>
                                <img src={loginImg}/>
                            </div>
                            <div className = 'form'>
                                <div className='form-group'>
                                    <label htmlFor='username'>Nome Completo</label>
                                    <input type='text' name='username' placeholder='Maria da Silva' value={this.clients.name} onChange={(e) => this.handleChange(e, 'name')}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='cpf'>CPF</label>
                                    <input type='text' name='cpf' placeholder='xxx.xxx.xxx-xx' value={this.clients.cpf} onChange={(e) => this.handleChange(e, 'cpf')}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>E-mail</label>
                                    <input type='email' name='email' inputmode='email' placeholder='exemplo@gmail.com' value={this.clients.email} onChange={(e) => this.handleChange(e, 'email')}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='contact'>Contato</label>
                                    <input type='contact' name='contact' placeholder='(xx)xxxx-xxxx' value={this.clients.contact} onChange={(e) => this.handleChange(e, 'contact')}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='adress'>Endereco</label>
                                    <input type='text' name='adress' placeholder='Ex: Rua Miranda Valverde' value={this.clients.address} onChange={(e) => this.handleChange(e, 'address')}/>
                                </div>
                            </div>
                        </div>
                        <div className='footer'>
                            <button type='submit' className='btn'>
                                Adicionar
                            </button>
                        </div>
                    </form> 
                    <div className='showItems'>
                        <h1> Dados dos clientes </h1> 
                        <table className="table table-client">  
                            <tr>  
                                <th>Nome</th>  
                                <th>CPF</th>  
                                <th>Email</th>  
                                <th>Contato</th>  
                                <th>Endereco</th> 
                                <th>Acao</th>
                            </tr>  
                            {this.listClient.map((listClient, index) => (  
                                <tr data-index={index}>  
                                    <td>{listClient.name}</td>  
                                    <td>{listClient.cpf}</td>  
                                    <td>{listClient.email}</td>  
                                    <td>{listClient.contact}</td>  
                                    <td>{listClient.address}</td>  
                                    <td>
                                        <button type='submit' className='btn' onClick={(e) => this.deleteData(index, e)}> Deletar item </button>
                                    </td>
                                </tr>  
                            ))}  
                        </table>     
                    </div>
                    
            </div>
        )
    }
}

export default Client
