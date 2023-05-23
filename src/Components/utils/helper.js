export function filterData(searchText, resList) {
  const data = resList.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}
