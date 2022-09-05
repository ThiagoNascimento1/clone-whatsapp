import * as C from './styles';

export const Chat = () => {

  return (
    <C.Chat>
      <C.ImgProfile>
        <div className="image"></div>
      </C.ImgProfile>
      <C.Main>
        <C.Name>Thiago</C.Name>
        <C.LastMenssage>
          Olá, Thiago; tudo bem? gostaria de contratar os serviços da sua empresa.
        </C.LastMenssage>
        <C.Time>4:30 PM</C.Time>
      </C.Main>
    </C.Chat>
  )
};