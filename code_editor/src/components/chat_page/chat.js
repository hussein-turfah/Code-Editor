import "./chat.css"
const Chat = (props) => {
    return ( 
        <div className="container">
            <form onSubmit={props.handleMessageSend} className="formText">
                <input 
                    type="text" 
                    className="inputText"
                    placeholder="type here" 
                    value={props.value} 
                    onChange={props.handleValue}
                />
                <button type="submit" className="send">
                    <div className="sendButton"><i>SEND</i></div>
                </button>
            </form>
        </div>
     );
}
 
export default Chat;