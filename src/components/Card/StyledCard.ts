import { styled } from "styled-components";
import { CardProps } from "./CardTypes";
const StyledCard = styled.div<CardProps>`
        display: flex;
        flex-direction: column;
        border-radius:  ${props => props.radius} ;
        position: relative;
        background-color:white;
        margin:12px;
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);
        padding-bottom:10px;
        span.style-title {
            font-size: ${props => props.fontSize};
            font-weight: ${props => props.fontWeight};
            line-height: ${props => props.lineHeight};
            color: #999999;
            margin:20px ;
        }

`
export {StyledCard}