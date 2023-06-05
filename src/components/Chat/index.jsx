import ChatBody from "../ChatBody";
import ChatHeader from "../ChatHeader";
import ChatFooter from "../ChatFooter";
import Default from "../Default";
import * as C from "./style";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;

  const { photoURL, name, chatId } = userChat || {};

  return (
    <C.Container>
      <ChatHeader photoURL={photoURL || ""} name={name || ""} />
      <ChatBody chatId={chatId || ""} />
      <ChatFooter chatId={chatId || ""} />
    </C.Container>
  );
};

export default Chat;
