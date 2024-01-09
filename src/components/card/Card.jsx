import { CardTitle, CardValue, CardWrapper } from "./card.styles";
import PropTypes from "prop-types";

const Card = ({ cardTitle, cardValue }) => {
  return (
    <CardWrapper>
      <CardTitle>{cardTitle}</CardTitle>
      <CardValue>{cardValue}</CardValue>
    </CardWrapper>
  );
};

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardValue: PropTypes.string.isRequired,
};

export default Card;
