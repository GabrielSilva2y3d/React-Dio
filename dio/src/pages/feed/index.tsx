import React from 'react'
import { Cards } from '../../components/Cards';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Gabriel Silva" image="https://avatars.githubusercontent.com/u/74156876?v=4" percentual={25}/>
                <UserInfo nome="Gabriel Silva" image="https://avatars.githubusercontent.com/u/74156876?v=4" percentual={65}/>
                <UserInfo nome="Gabriel Silva" image="https://avatars.githubusercontent.com/u/74156876?v=4" percentual={45}/>
                <UserInfo nome="Gabriel Silva" image="https://avatars.githubusercontent.com/u/74156876?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 