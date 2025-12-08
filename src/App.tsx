//import LightTheme from './themes/light';
import Sidebar from './container/Sidebar';
import { useState } from 'react';
// Importação dos estilos globais e do container estilizado. GlobalStyle vem antes pois é o export default do arquivo style.ts
import GlobalStyle, { Container } from './style';
import Sobre from './container/Sobre';
import Projetos from './container/Projetos';
import Contatos from './container/Contatos';
import Paragrafo from './components/Paragrafo';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './themes/dark';
import { LightTheme } from './themes/light';

function App() {

    const [theme, setTheme] = useState(false);

    function toggleTheme() {
        setTheme(!theme);
    }
    return (
        <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
            <GlobalStyle />
            <Container>
                <Sidebar toggleTheme={toggleTheme}/>
                <main>
                    <Sobre />
                    <Projetos />
                    <Paragrafo children={''} />
                    <Contatos />
                </main>
            </Container>
        </ThemeProvider>
    );
}

export default App;
