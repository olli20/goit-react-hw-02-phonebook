import PropTypes from 'prop-types';

const Filter = ({filter, onFilter}) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" value={filter} onChange={onFilter}  />
        </>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
}

