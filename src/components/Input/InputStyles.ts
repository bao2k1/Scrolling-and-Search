export interface InputProp {
    width?: number;
    height?: number;
    borderColor?: string;
    borderRadius?: number;
    bgColor?: string;
    textColor: string;
    fontSize?: number;
}
  
export const defaultInput: InputProp = {
    bgColor: "#FFFFFF",
    textColor: "#5429FF",
    width: 128,
    height: 46,
    borderRadius: 40,
    fontSize: 16,
};