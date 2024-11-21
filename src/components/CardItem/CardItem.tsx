import { StyledCardItem } from "./StyledCardItem";
import { CardItemProps, getCardItemProps } from "./CardItemTypes";
import { NavLink } from "react-router-dom";
const CardItem: React.FC<Partial<CardItemProps>> = (props) => {
    const fullProps = getCardItemProps(props);
    return (
        <StyledCardItem
        {...fullProps}
        >
                <NavLink to="/" className="nav-link">
                    <div className="icon-circle">
                        {fullProps.icon}
                    </div>
                    <span>{fullProps.name}</span>
                    {fullProps.quantity?<div className="quantity">
                        {fullProps.quantity}
                    </div>:<></>}
                </NavLink>
        </StyledCardItem>
    )
}
export default CardItem