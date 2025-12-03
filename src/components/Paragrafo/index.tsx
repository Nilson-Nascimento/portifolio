import { P } from "./style";

// Definição do componente Titulo, children é uma string passada como prop para o componente Titulo, se referindo ao texto "Nilson Nascimento" que é exibido dentro do componente e não pode ser passado outro tipo de dado como número ou objeto diretamente.
export type TituloProps = {
    children: string;
    fontSize?: number;
    tipo?: 'main' | 'notMain';
}

const Paragrafo = ({children, tipo = 'main', fontSize} : TituloProps) => (<P fontSize={fontSize} tipo={tipo}>{children}</P>
)

export default Paragrafo;
