import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { SideButton, Description, SidebarFix } from "./style"

const Sidebar = () => (
    <aside>
        <SidebarFix>
            <Avatar />
            <Titulo fontSize={20}>Nilson Nascimento</Titulo>
            <Paragrafo fontSize={14} tipo="main">Dev Front-End</Paragrafo>

            <Description fontSize={12} tipo="notMain">Qualquer Coisa</Description>
            <SideButton>Trocar tema</SideButton>
        </SidebarFix>
    </aside>
)

export default Sidebar
