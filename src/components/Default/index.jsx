import * as C from "./style";
import Logo from "../../assets/logo.png";

const Default = () => {
  return (
    <C.Container>
      <img src={Logo} alt="" />
      <C.Title>WolfTalk</C.Title>
      <C.Info>
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet e com muito mais segurança!.
      </C.Info>
    </C.Container>
  );
};

export default Default;
