import { ReactComponent as Author } from "./Author.svg";
import avatar from "../../assets/img/avatar.jpg";
export interface ChatItemProps {
    name?: string;
    width?: string;
    height?: string;
    radius?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    mainColor?: string;
    status?: String;
    svgHeight?: string;
    srcImg?: any;
  }
  
  const defaultChatItemProps: ChatItemProps = {
    name:'New',
    width: "100%",
    height: "400px",
    radius: "10px",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
    mainColor:"#ccc",
    svgHeight:"20px",
    srcImg: avatar,
    status: "silent"
  }
  
  // Utility function to apply default values
  export const getChatItemProps = (props: Partial<ChatItemProps>): ChatItemProps => {
    return {
      ...defaultChatItemProps,
      ...props
    }
  }
  