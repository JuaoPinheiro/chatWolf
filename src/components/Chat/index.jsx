import ChatBody from "../ChatBody";
import ChatHeader from "../ChatHeader";
import ChatFooter from "../ChatFooter";
import Default from "../Default";
import * as C from "./style";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;
  
  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
};

export default Chat;
