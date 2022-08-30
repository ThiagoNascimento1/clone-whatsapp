// Styles
import * as C from './styles';
// Components
import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';

export const Home = () => {

  return (
    <C.Container>
      <C.NavSide>

        <Header />
        <InputSearch />
        
      </C.NavSide>
      <C.BoxChat>

      </C.BoxChat>
    </C.Container>
  )
};