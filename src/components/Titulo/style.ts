import styled from "styled-components";

import { TituloProps } from ".";

export const Titulo = styled.h3<TituloProps>`
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : '14px'};
    font-weight: bold;
    color: #61dafb;

    margin-bottom: 16px;
`
