import styled from "styled-components";
import { P } from "../../components/Paragrafo/style";

export const Description = styled(P)`
    margin-top:24px;
    margin-bottom: 40px;
`
export const SideButton = styled.button`
    border-radius: 12px;
    padding: 8px;
    color: ${(props) => props.theme.BackgroundColor};
    font-size:10px;
    font-weight:bold;
    background-color: ${(props) => props.theme.BackgroundButton};
    cusrsor: pointer;
`
export const SidebarFix = styled.div`
    position:sticky;
    top:80px;
    left:0;

    @media (max-width: 768px){
        margin-bottom: 40px;
        text-align: center;
    }
`
