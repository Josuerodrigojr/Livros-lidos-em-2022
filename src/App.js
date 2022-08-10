import React from 'react';
import {TabelaHead, TabelaBody, TabelaFooter} from './components/TabelaHead'

class App extends React.Component {
  state ={
    livros:[]
  }
componentDidMount(){
  fetch("api/livros.json").then(response => response.json()).then(livros => this.setState({livros})).catch(function(error){ console.log('Erro na aplicação')}).finally(function(){
    console.log("Foi")
  })
}
  
botaoDeRemover=(id)=>{
  const livros = this.state.livros.filter(l => l.id !== id);
  this.setState({livros})

}
  
  render(){
  return (<div>
    <h1>Livros lidos em 2022</h1>
    <table className='tabela'>
    <TabelaHead />
    <TabelaBody livrosLidos = {this.state.livros} remover={this.botaoDeRemover}/>
    <TabelaFooter qtDeLivros = {this.state.livros.length}/>
</table>
</div>
    
  )};
}

export default App;
