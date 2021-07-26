//import { NULL } from 'node-sass';
import React from 'react';
import clientImg from '../login2.gif'

export class Products extends React.Component {
    
    constructor(props){
        super(props);
        this.listItem = JSON.parse(window.localStorage.getItem('lista-de-produtos') || "[]");
        this.product = {
            title: '',
            description:'',
            category: '',
            price: 0,
            inventory:0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, attribute) {
        this.product[attribute] = event.target.value
        this.forceUpdate();
    }

    handleSubmit(event) {
        //alert('Um nome foi enviado: ' + this.product.title);
        this.listItem = JSON.parse(window.localStorage.getItem('lista-de-produtos') || "[]");
        this.listItem.push(this.product);
        window.localStorage.setItem('lista-de-produtos', JSON.stringify(this.listItem));
        this.forceUpdate();
        event.preventDefault();
    }

    deleteData(index){
        this.listItem = JSON.parse(window.localStorage.getItem('lista-de-produtos') || "[]");
        alert('deletando item');
        this.listItem.splice(index, 1);
        window.localStorage.setItem('lista-de-produtos', JSON.stringify(this.listItem));
        this.forceUpdate();
        //window.localStorage.setItem('lista-de-produtos', JSON.stringify(this.listItem));
    }


    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
                <div className='header'> Gestão de cadastros </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='content'>
                            <div className='image'>
                                <img src={clientImg} alt='Imagem decorativa'/>
                            </div>
                            <div className ='form'>
                                <div className='form-group'>
                                    <label htmlFor='titleProd'>Título</label>
                                    <input type='text' name='titleProd' placeholder='Nome do produto' value={this.product.title} onChange={(e) => this.handleChange(e, "title")}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='descriptionProd'>Descrição</label>
                                    <input type='text' name='descriptionProd' placeholder='Descriçao do produto' value={this.product.description} onChange={(e) => this.handleChange(e, "description")}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='categoryProd'>Categoria</label>
                                    <input type='text' name='categoryProd' placeholder='Categoria do produto' value={this.product.category} onChange={(e) => this.handleChange(e, "category")}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='priceProd'>Preço(R$)</label>
                                    <input type='text' name='priceProd' placeholder='R$00,00' value={this.product.price} onChange={(e) => this.handleChange(e, "price")}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='inventoryProd'>Estoque</label>
                                    <input type='number' min="1"  name='inventoryProd' placeholder='Quantidade de itens' value={this.product.inventory} onChange={(e) => this.handleChange(e, "inventory")}/>
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
                        <h1> Produtos Armazenados </h1> 

                        <table className="table table-products">  
                            <tr>  
                                <th>Titulo</th>  
                                <th>Descricao</th>  
                                <th>Categoria</th>  
                                <th>Preco</th>  
                                <th>Inventario</th>
                                <th>Acao</th>                                
                            </tr>  
                            {this.listItem.map((listItem, index) => (  
                                <tr data-index={index}>  
                                    <td>{listItem.title}</td>  
                                    <td>{listItem.description}</td>  
                                    <td>{listItem.category}</td>  
                                    <td>{listItem.price}</td>  
                                    <td>{listItem.inventory}</td>  
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

