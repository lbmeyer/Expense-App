// SET_FILTER_TEXT Action
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_AMOUNT action
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE action
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE Action
export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE Action
export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});