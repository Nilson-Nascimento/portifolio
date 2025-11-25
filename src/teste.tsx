import exp from 'constants'
import styled from 'styled-components'

// const Botao = styled.button`
//     background-color: blue;
//     color: white;
//     `

// Tipagem para as props do styled components
type BotaoProps = {
    primary: boolean
    fontSize?: string // Propriedade opcional devido ao "?"
}

// Criação do botão com base na prop primary
const Botao = styled.button<BotaoProps>`
    background-color: ${props => props.primary ? 'green' : 'red'};
    font-size: ${props => props.fontSize || '16px'};
`
// Extensão do botão para criar um botão de perigo e cascateamento de estilos
const BotaoDanger = styled(Botao)`
    background-color: red;
    color: white;

    span {
        font-weight: bold;
        text-decoration: underline;
    }
`
function Teste(){
    return <div>
        <h3>Olá Styled Components</h3>
        <Botao primary>Enviar</Botao>
        <Botao fontSize="12px" primary={false}>Cancelar</Botao>
        <BotaoDanger as="a" primary>
            <span>Deletar</span>
        </BotaoDanger> {/*  // Usando o botão como link ao passar as="a" */}
    </div>
}

export default Teste
