// Styles
import * as C from './styles';
// Icons
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Header = () => {

  return (
    <C.Container>
      <C.Avatar>
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
      </C.Avatar>
      <C.Buttons>
        <DonutLargeIcon />
        <ChatIcon />
        <MoreVertIcon />
      </C.Buttons>
    </C.Container>
  )
};