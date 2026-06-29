const Consversation = ({ sender, convo, displayConvo }) => {

    return (
        <div>
            {convo.map((msg, index) => (
                <div key={index} className="message-row">
                    <span className="sender">{msg.sender === "self" ? "Me" : sender}</span>: "{msg.text}"
                </div>
            ))}
            <button className="back" onClick={() => displayConvo(null)}> back </button>
        </div>
    );
};
export default Consversation;
