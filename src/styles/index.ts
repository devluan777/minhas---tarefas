import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media (min-width: 768px) {
    grid-template-columns: 224px auto;
  }
`
export const MainContainer = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  @media (min-width: 768px) {
    padding: 0 40px;
    height: 100vh;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
  }
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #ffffff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
