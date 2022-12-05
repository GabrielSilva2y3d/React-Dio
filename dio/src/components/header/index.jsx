import React from 'react'
import { Button } from '../Buttons'
import {
    Brapper,
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture
} from './styles'

const Header = () => {
  return (
    <Brapper>
        <Container>
            <Row>
                <MenuRight href='a'>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar"/>
                
                <img src={} alt="Logo da dio" />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
        </Container>
    </Brapper>
  )
}

export { Header }
