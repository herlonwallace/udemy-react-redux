import './TabelaProdutos.css'
import produtos from "../../data/produtos"

export default function ListaProdutos () {
    
    const listaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
    
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}