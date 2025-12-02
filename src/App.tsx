import Sidebar from './container/Sidebar';
// Importação dos estilos globais e do container estilizado. GlobalStyle vem antes pois é o export default do arquivo style.ts
import GlobalStyle, { Container } from './style';
import Sobre from './container/Sobre';
import Projetos from './container/Projetos';
import Contatos from './container/Contatos';
import Paragrafo from './components/Paragrafo';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Container>
                <Sidebar />
                <main>
                    <Sobre />
                    <Projetos />
                    <Paragrafo children={''} />
                    <Contatos />
                </main>
            </Container>
        </div>
    );
}

export default App;
