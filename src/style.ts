// Styled é uma biblioteca para estilização de componentes em React usando CSS-in-JS e é export default, nesse caso ele vem antes do createGlobalStyle que é uma função para criar estilos globais aplicados a toda a aplicação.
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        list-style: none;
        }

        body {
            padding-top: 80px;
            padding-bottom: 80px;
            background-color: ${(props) => props.theme.BackgroundColor};

            @media (max-widtg:68px){
                padding-top: 16px;
            }
        }
    }
`
export default GlobalStyle

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 56px;



    @media (max-width: 768px){
        max-width:80%;
        display: block;


    }
`
