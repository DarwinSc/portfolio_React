import PropTypes from 'prop-types';
import Card from '../card/card'


const CardComponent = (props) => {
    return(
        <Card {...props} />
    )
};  


CardComponent.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
};

CardComponent.defaultProps = {
    text:"-",
    icon:"car",
    title:"-"
}

export default CardComponent;