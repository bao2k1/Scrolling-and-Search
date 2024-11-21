import { StyledCard } from "./StyledCard";
import { CardProps, getCardProps } from "./CardTypes";
import CardItem from "../CardItem/CardItem";

export const Card: React.FC<Partial<CardProps>> = (props) => {
    const fullProps = getCardProps(props);
    return (
        <StyledCard
        {...fullProps}
        >
                <span className="style-title">{fullProps.title}</span>
                {fullProps.listData?.map((card, index) => (
                    <CardItem
                        key={index}
                        name={card.name}
                        color1={card.color1}
                        color2={card.color2}
                        fontSize={card.fontSize}
                        fontWeight={card.fontWeight}
                        icon={card.icon}
                        quantity={card.quantity}
                        svgHeight={card.svgHeight}
                    />
                ))}
        </StyledCard>
    )
}
