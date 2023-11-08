import { SingleSelect, SingleSelectOption } from '@dhis2/ui';
import {
  ALL_OPTION,
  CARD_WIDTH,
  MAP_OPTION,
  TEXT_OPTION,
  VISUALIZATION_OPTION,
} from '../constants/dashboardCard';

// Interface FilterSelectProps for filter options
interface FilterSelectProps {
  filter: string | null;
  setFilter: (filter: string | null) => void;
}
const FilterSelect = ({ filter, setFilter }: FilterSelectProps) => {
  return (
    <div
      style={{
        width: CARD_WIDTH,
      }}
    >
      <SingleSelect
        className='select'
        filterable
        noMatchText='No match found'
        onChange={({ selected }: { selected: string }) => {
          setFilter(selected || null);
        }}
        placeholder='Filter Items'
        selected={filter || ''}
      >
        <SingleSelectOption label='ALL' value={ALL_OPTION} />
        <SingleSelectOption
          label='VISUALIZATION'
          value={VISUALIZATION_OPTION}
        />
        <SingleSelectOption label='MAP' value={MAP_OPTION} />
        <SingleSelectOption label='TEXT' value={TEXT_OPTION} />
      </SingleSelect>
    </div>
  );
};

export default FilterSelect;
