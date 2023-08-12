import { selectFilterContacts } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlise';
import { Box, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Filter = () => {
  const filterState = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onChangeFilter = ev => {
    dispatch(filterContacts(ev.target.value.toLowerCase().trim()));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 3 }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        type="text"
        value={filterState}
        onChange={onChangeFilter}
        label="Find contacts by name"
        variant="standard"
      />
    </Box>
  );
};

export default Filter;
