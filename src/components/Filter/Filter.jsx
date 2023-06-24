import { useSelector, useDispatch } from 'react-redux';
import {
  InputFilter,
  FilterWrapper,
  ButtonFilter,
  Cross,
} from './Filter.styled';
import { selectFilter } from '../../redux/filter-selector';
import { addFilter, resetFilter } from '../../redux/filter-slice';

const Filter = () => {
  const searchValue = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <FilterWrapper>
      <InputFilter
        type="text"
        name="filter"
        value={searchValue}
        onChange={handleFilterChange}
        placeholder="Search contact's name"
      />
      <ButtonFilter type="button" onClick={() => dispatch(resetFilter())}>
        <Cross></Cross>
      </ButtonFilter>
    </FilterWrapper>
  );
};

export default Filter;
