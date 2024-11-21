import styled from "styled-components";
import { ButtonProps } from "./ButtonTypes";

export const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.text_color};
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: ${props => props.radius};
  border: ${props => props.border_custom};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  background: linear-gradient(${props => props.bg_color1}, ${props => props.bg_color1}) padding-box, linear-gradient(60deg, ${props => props.bg_color1}, ${props => props.bg_color3}) border-box;
  background: ${props => props.bg_color};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
      font-size: ${props => props.font_size_text};
      border-bottom: ${props => props.border_bottom_text};
  }
  svg {
      position: absolute;
      top: 6px;
      right: 0;
      path {
          stroke: ${props => props.text_color};
      }
  }
`