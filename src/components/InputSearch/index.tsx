// Styles
import * as C from './styles';
// Icons
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export const InputSearch = () => {

  return (
    <C.Container>
      <C.InputArea>
        <SearchIcon />
        <C.Input type="text" placeholder="Search or start new chat" />
      </C.InputArea>
      <FilterListIcon />
    </C.Container>
  )
};