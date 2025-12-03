import Projectos from "../../components/Projectos";
import Titulo from "../../components/Titulo";
import { List } from "./style";

const Projetos = () => (
    <section>
        <Titulo fontSize={16}>Projetos</Titulo>
        <List>
            <li><Projectos/></li>
            <li><Projectos/></li>
            <li><Projectos/></li>
            <li><Projectos/></li>
            <li><Projectos/></li>
            <li><Projectos/></li>
            <li><Projectos/></li>
            <li><Projectos/></li>
        </List>
    </section>
)

export default Projetos;
