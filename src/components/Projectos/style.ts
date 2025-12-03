import styled from "styled-components";
import { TituloProps } from "../Paragrafo/index";

export const Card = styled.div<TituloProps>`
    border: 1px solid ${(props) => (props.tipo === 'notMain' ? '#61dafb' : '#333333')};
    padding: 16px;
`
export const ButtonLink = styled.a`
    color: #61dafb;
    font=size: 14px;
    background-color: #4476bf ;
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    margin-top: 24px;
`
