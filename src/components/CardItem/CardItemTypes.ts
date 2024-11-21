import { ReactComponent as Author } from "./Author.svg";
export interface CardItemProps {
    name?: string;
    width?: string;
    height?: string;
    radius?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    mainColor?: string;
    color1?: string;
    color2?:string;
    icon?: React.ReactNode;
    quantity?: number;
    svgHeight?: string;
  }
  
  const defaultCardItemProps: CardItemProps = {
    name:'New',
    width: "100%",
    height: "400px",
    radius: "10px",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
    mainColor:"#ccc",
    color1: "000000",
    color2: "000000",
    svgHeight:"20px"
  }
  
  // Utility function to apply default values
  export const getCardItemProps = (props: Partial<CardItemProps>): CardItemProps => {
    return {
      ...defaultCardItemProps,
      ...props
    }
  }
  