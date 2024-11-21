import { StyledChatItem } from "./StyledChatItem";
import { ChatItemProps,getChatItemProps } from "./ChatItemTypes";
const ChatItem: React.FC<Partial<ChatItemProps>> = (props) => {
    const fullProps = getChatItemProps(props);
    return (
        <StyledChatItem
        {...fullProps}
        >           
                    <div className="chat-personal">
                        <div className="icon-circle">
                            <img alt="chat-avatar" src={fullProps.srcImg}></img>
                        </div>
                        <span>{fullProps.name}</span>
                    </div>
                    <div className={`chat-status ${fullProps.status === "live" ? "live" : 
                           fullProps.status === "silent" ? "silent" : 
                           fullProps.status === "off" ? "off" : ""}`} >

                    </div>

        </StyledChatItem>
    )
}
export default ChatItem