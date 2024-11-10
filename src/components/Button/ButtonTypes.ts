export interface ButtonProps {
  title?: string;
  text_color?: string;
  bg_color?: string | null;
  width?: string;
  height?: string;
  radius?: string;
  border_custom?: string;
  fontSize?: string;
  fontWeight?: string;
  font_size_text?: string;
  bg_color1?: string;
  bg_color2?: string;
  bg_color3?: string;
  isGenres?: boolean;
  border_bottom_text?: string;
}

const defaultButtonProps: ButtonProps = {
  title: 'Button',
  text_color: '#000',
  bg_color: null,
  width: 'auto',
  height: 'auto',
  radius: '0',
  border_custom: 'none',
  fontSize: '16px',
  fontWeight: 'normal',
  font_size_text: '14px',
  bg_color1: "#130303",
  bg_color2: "#130303",
  bg_color3: "#FF0016",
  isGenres: false,
  border_bottom_text: 'none',
}

// Utility function to apply default values
export const getButtonProps = (props: Partial<ButtonProps>): ButtonProps => {
  return {
    ...defaultButtonProps,
    ...props
  }
}
