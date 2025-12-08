// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Dica: prefira camelCase
    PrimaryColor: string;
    SecondaryColor: string;
    ThirdaryColor: string;
    BackgroundColor: string;
    BackgroundButton: string;
    // adicione outras tokens aqui...
  }
}

// garante que o arquivo é um módulo
export {};
