// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    // if startDate is undefined, it's true so item won't get filtered 
    // (all items are shown regardless of their date). Now if startDate
    // however is a number (false), we move to right of || and check to see if createdAt 
    // is greater than startDate (looking for expenses that were created AFTER startDate)
    // This returns true and does not get filtered
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

export default getVisibleExpenses;