export interface CardProps {
    title?: string;
    width?: string;
    height?: string;
    radius?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    listData?: Array<any>;
  }
  
  const defaultCardProps: CardProps = {
    title:'#ccc',
    width: "100%",
    height: "400px",
    radius: "10px",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "20px",
    listData:[]
  }
  
  // Utility function to apply default values
  export const getCardProps = (props: Partial<CardProps>): CardProps => {
    return {
      ...defaultCardProps,
      ...props
    }
  }
  