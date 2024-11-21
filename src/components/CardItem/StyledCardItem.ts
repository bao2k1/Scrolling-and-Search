import { styled } from "styled-components";
import { CardItemProps } from "./CardItemTypes";
const StyledCardItem = styled.div<CardItemProps>`
        
        .nav-link{
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration:none;
            color:var(--text-color);
            font-size:${props => props.fontSize};
            font-weight:${props => props.fontWeight};
            margin:0px 20px 10px 20px;
            
            .icon-circle{
                margin-right:10px;
                height: 46px;
                width:46px;
                border-radius:50%;

                background: linear-gradient(
                    to bottom right, 
                    ${props => props.color1 || '#ffffff'}, 
                    ${props => props.color2 || '#ffffff'}
                );
                display: flex;
                justify-content:center ;
                align-items: center;
                svg{
                    height:${props => props.svgHeight};
                }
            }
            .quantity{
                height:16px;
                min-width: 24px;
                padding: 6px;
                border-radius:8px;
                background-color:orange;
                display: flex;
                align-items:center;
                justify-content:center;
                margin-left:auto;
                color:#fff;
            }
        }
        
        :hover{
                span{
                    color:#0055ff;
                }
            }
`
export {StyledCardItem}