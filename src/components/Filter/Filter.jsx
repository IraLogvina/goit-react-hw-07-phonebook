import React from "react";
import style from "./Filter.module.css";
// import PropTypes from "prop-types";
// import actions from "../../redux/actions";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { filterContacts } from "../../redux/actions";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        // onChange={onChange}
        className={style.input}
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;

// redux

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(actions.filterContacts(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
