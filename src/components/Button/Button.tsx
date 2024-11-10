import React from "react";
import { StyledButton } from "./StyledButton";
import { ButtonProps, getButtonProps } from "./ButtonTypes";


const Button: React.FC<Partial<ButtonProps>> = (props) => {
    const fullProps = getButtonProps(props);
    
    return (
        <StyledButton 
            {...fullProps}
        >
            <span>{fullProps.title}</span>
        </StyledButton>
    )
}

export default Button;