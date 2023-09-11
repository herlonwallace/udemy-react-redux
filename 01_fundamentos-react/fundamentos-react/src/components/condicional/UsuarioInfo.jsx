import If from "./If"

export default function UsuarioInfo(props) {
    
    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ props.usuario.nome }</strong>!    
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Sem cadastro</strong>!    
            </If>
        </div>
    )
}