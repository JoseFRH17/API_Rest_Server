import React from 'react';

class ListaCompra extends React.Component {
    render() {
      return (
        <div className="ListaCompra">
          <h1>Lista de compras para {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  
  // Uso de ejemplo: <ShoppingList name="Mark" />
  export default ListaCompra;