// Styles
import * as C from './styles';
// Components
import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import { Chat } from '../../components/chat';

export const Home = () => {

  return (
    <C.Container>
      <C.NavSide>

        <Header />
        <InputSearch />

        <C.ChatList>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        </C.ChatList>

      </C.NavSide>
      
    </C.Container>
  )
};