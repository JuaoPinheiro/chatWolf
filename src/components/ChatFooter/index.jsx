import { useState } from "react";
import * as C from "./style";
import { db, auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiImageAdd } from "react-icons/bi";
import firebase from "firebase/compat/app";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  const [media, setMedia] = useState(null);
  const [mediaName, setMediaName] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() !== "" || media) {
      const messageData = {
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };

      if (message.trim() !== "") {
        messageData.message = message;
      }

      if (media) {
        const storageRef = firebase.storage().ref();
        const mediaRef = storageRef.child(media.name);
        await mediaRef.put(media);
        const mediaURL = await mediaRef.getDownloadURL();
        messageData.mediaURL = mediaURL;
      }

      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(messageData);

      setMessage("");
      setMedia(null);
      setMediaName("");
    }
  };

  const handleMediaChange = (e) => {
    const selectedMedia = e.target.files[0];
    setMedia(selectedMedia);
    setMediaName(selectedMedia.name);
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input
          type="file"
          onChange={handleMediaChange}
          accept="image/*"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <BiImageAdd className="imageSelected" />
        </label>
        {mediaName && <span>{mediaName}</span>}
        <button onClick={handleSendMessage}>Send</button>
      </C.Form>
    </C.Container>
  );
};

export default ChatFooter;
