import styled from "styled-components";
import { InputProp } from "./InputStyles";

const StyledInput = styled.input<InputProp>`
  padding: 0 0 0 10px;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius + "px"};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  /* font-size: ${(props) => props.fontSize}; */
  img {
    margin-right: 8px;
  }
`;

export {StyledInput}