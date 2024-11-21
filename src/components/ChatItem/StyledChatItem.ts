import { styled } from "styled-components";
import { ChatItemProps } from "./ChatItemTypes";
const StyledChatItem = styled.div<ChatItemProps>`
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    align-items:center ;
    .chat-personal{
        display:flex;
        align-items: center;
        font-size:14px;
        font-weight:500;
        color:#3f4346;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .icon-circle{
        width:36px;
        height:36px;
        border-radius:50%;
        border:1px solid #ccc;
        justify-content:center ; 
        align-items: center ; 
        margin-right:12px;

        img{
            width:100%;
            height:100%;
            border-radius:50%;
         
        }
    }
    .chat-status{
        height:8px;
        width:8px;
        border-radius:50%;
        
    }
    .live{
        background-color:green;
    }
    .silent{
        background-color:orange;
    }
    .off{
        background-color:red;
    }
`
export {StyledChatItem}