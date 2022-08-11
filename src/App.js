import React from 'react';
import {TabelaHead, TabelaBody, TabelaFooter} from './components/Tabela'

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

handleOrdenarCrescente = (titulo) =>{
  const livros = this.state.livros.sort((a,b)=>
  a.titulo < b.titulo ? -1:0
  );
  this.setState({livros}); 
}

handleOrdenarDecrescente = (titulo) =>{
  const livros = this.state.livros.sort((a,b)=>
  a.titulo < b.titulo ? -1:0
  );
  livros.reverse();
  this.setState({livros}); 
}

handleOrdenarCrescenteAutor = (autor) =>{
  const livros = this.state.livros.sort((a,b)=>
  a.autor<b.autor ? -1:0
  );
  this.setState({livros})
}
 
handleOrdenarDecrescenteAutor = (autor) =>{
  const livros = this.state.livros.sort((a,b)=>
  a.autor<b.autor ? -1:0
  );
  livros.reverse();
  this.setState({livros})
}

  render(){
  return (<div>
    <h1>Livros lidos em 2022</h1>
    <table className='tabela'>
    <TabelaHead ordemCrescente = {this.handleOrdenarCrescente} ordemDecrescente = {this.handleOrdenarDecrescente} ordemCrescenteAutor = {this.handleOrdenarCrescenteAutor} ordemDecrescenteAutor={this.handleOrdenarDecrescenteAutor}/>


    <TabelaBody livrosLidos = {this.state.livros} remover={this.botaoDeRemover}/>
    <TabelaFooter qtDeLivros = {this.state.livros.length}/>
</table>
</div>
    
  )};
}

export default App;
