import React from "react";



const TabelaHead = (props)=>(

    <thead>
    <tr>
    <td>ISBN</td>
            <td>Titulo 
            <div className='container-setinhas'>
            <div onClick={()=> props.ordemCrescente()}>&#129093;</div>
            <div onClick={()=> props.ordemDecrescente()}>&#129095;</div>
            </div>
            </td>
            <td>Autor
            <div className='container-setinhas'>
            <div onClick={()=> props.ordemCrescenteAutor()}>&#129093;</div>
            <div onClick={()=> props.ordemDecrescenteAutor()}>&#129095;</div>
            </div>
            </td>
            <td>Sinopse</td>
            <td></td>
    </tr>
   
</thead>

)

const TabelaBody = (props) =>(
    <tbody>
        {props.livrosLidos.map((livro, index) => (
            <tr key={livro.id}>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>{livro.sinopse}</td>
            <td><button onClick={() => props.remover(livro.id)}>Remover</button></td>
            </tr>
        )

        )}

    </tbody>
)

const TabelaFooter = (props) => (
    <tfoot>
        <tr>
            <td colSpan="5">A quantidade de livros lidos foi {props.qtDeLivros}</td>
        </tr>
    </tfoot>
)


export {TabelaHead, TabelaBody, TabelaFooter}