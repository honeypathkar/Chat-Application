import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import { onSnapshot, doc } from "firebase/firestore";
import {db} from "../firebase"

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const usSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().message);
    });

    return () => {
      usSub();
    };
  }, [data.chatId]);
  return (
    <div>
      {messages.map((msg) => (
        <Message message={msg} key={msg.id} />
      ))}
    </div>
  );
}
