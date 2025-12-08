import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { SideButton, Description, SidebarFix } from "./style"

type SidebarProps = {
    toggleTheme: () => void;
}

const Sidebar = (props: SidebarProps) => (
    <aside>
        <SidebarFix>
            <Avatar />
            <Titulo fontSize={20}>Nilson Nascimento</Titulo>
            <Paragrafo fontSize={14} tipo="main">Dev Front-End</Paragrafo>

            <Description fontSize={12} tipo="main">Qualquer Coisa</Description>
            <SideButton onClick={props.toggleTheme}>Trocar tema</SideButton>
        </SidebarFix>
    </aside>
)

export default Sidebar
