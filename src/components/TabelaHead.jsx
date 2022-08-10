import React from "react";



const TabelaHead = ()=>(

    <thead>
    <tr>
    <td>ISBN</td>
            <td>Nome</td>
            <td>Autor</td>
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