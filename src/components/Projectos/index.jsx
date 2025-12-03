import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import { Card, ButtonLink } from "./style";

const Projectos = () => (
    <Card tipo="main">
        <Titulo>Projectos Lista de tarefas</Titulo>
        <Paragrafo tipo="notMain">
            Lista de tarefas desenvolvida em React com estilização em CSS-in-JS utilizando a biblioteca Styled Components.
        </Paragrafo>
        <ButtonLink href="">Visualizar</ButtonLink>
    </Card>


)

export default Projectos;
