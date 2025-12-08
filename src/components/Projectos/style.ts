import styled from "styled-components";
import { TituloProps } from "../Paragrafo/index";

export const Card = styled.div<TituloProps>`
    border: 1px solid ${(props) => (props.tipo === 'main' ? props.theme.BackgroundButton : '#333333')};
    padding: 16px;
`
export const ButtonLink = styled.a`
    color: ${(props) => props.theme.BackgroundColor};
    font=size: 14px;
    background-color: ${(props) => props.theme.BackgroundButton}; ;
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    margin-top: 24px;
`
