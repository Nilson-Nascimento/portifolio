import styled from "styled-components";

import { TituloProps } from ".";

export const P = styled.p<TituloProps>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    line-height: 22px;
    color: ${(props) => (props.tipo === 'main' ? '#eef1f1ff' : '#828282ff')};
    margin-top: 8px;
`
