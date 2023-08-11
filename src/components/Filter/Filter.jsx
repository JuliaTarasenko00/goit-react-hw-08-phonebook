import { selectFilterContacts } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlise';

const Filter = () => {
  const filterState = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onChangeFilter = ev => {
    dispatch(filterContacts(ev.target.value.toLowerCase().trim()));
  };

  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={filterState}
        onChange={onChangeFilter}
        placeholder="search"
      />
    </label>
  );
};

export default Filter;
