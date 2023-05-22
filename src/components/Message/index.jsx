import * as C from "./style";
import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <C.Container>
      <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
        <C.Content>
          {message.message && <C.Message>{message.message}</C.Message>}
          {message.mediaURL && (
            <a
              href={message.mediaURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <C.MediaImage
                className="midia"
                src={message.mediaURL}
                alt="Imagem enviada"
              />
            </a>
          )}
          <C.MessageDate>
            {new Date(message?.timestamp).toLocaleString()}
          </C.MessageDate>
        </C.Content>
      </C.Line>
    </C.Container>
  );
};

export default Message;
