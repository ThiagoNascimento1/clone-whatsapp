// Styles
import * as C from './styles';
// Components
import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import { Chat } from '../../components/chat';
import { NotChat } from '../../components/NotChat';
// Hooks
import { useState } from 'react';

export const Home = () => {

  const [ chatIsSelected, setChatIsSelected ] = useState(false);

  return (
    <C.Container>
      <C.NavSide>

        <Header />
        <InputSearch />

        <C.ChatList>
        </C.ChatList>

      </C.NavSide>
      <C.ChatActive>
        {!chatIsSelected && <NotChat />}
      </C.ChatActive>
      
    </C.Container>
  )
};