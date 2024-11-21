import styled from "styled-components";

const StyledChatBar = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    overflow: auto;
    background-color:var(--body-background);
    
    .chatbar-content{
        background-color:#fff;
        margin:12px;
        border-radius:  12px;  
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2); 
        padding:20px;

        h3.chatbar-name{
            padding:10px 0 !important;
            margin:0;
            font-size:16px;
        }
      
        color:var(--text-color);
        }

    
    
`;

export {StyledChatBar}