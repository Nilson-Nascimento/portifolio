import styled from "styled-components";

import { TituloProps } from ".";

export const P = styled.p<TituloProps>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    line-height: 22px;
    color: ${(props) => props.tipo === 'main' ? props.theme.PrimaryColor : props.theme.SecondaryColor};
    margin-top: 8px;
`
