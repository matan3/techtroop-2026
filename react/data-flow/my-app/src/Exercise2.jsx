import React, { useState } from 'react';
import List from './List';
import Conversation from './Conversation';

const Exercise2 = () => {

    const [chat, setChat] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    });

    const displayConvo = name => {
        const newChat = { ...chat };
        newChat.displayConversation = name;
        setChat(newChat)
    }

    return (
        <>
            {chat.displayConversation === null ? (
                <List
                    arrNames={chat.conversations.map(item => item.with)}
                    displayConvo={displayConvo}
                />
            ) : (
                <Conversation
                    sender={chat.displayConversation}
                    convo={chat.conversations.find(item => item.with === chat.displayConversation).convo}
                    displayConvo={displayConvo}
                />
            )}
        </>
    );
};
export default Exercise2;

