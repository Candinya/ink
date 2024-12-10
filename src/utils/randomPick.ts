export const randomPick = <T>(arr: T[] | undefined, n: number): T[] => {
  if (!arr) {
    return [];
  }
  const allItems = [...arr];
  const selectedItems: T[] = [];
  while (allItems.length > 0 && n > selectedItems.length) {
    const selectedIndex = Math.floor(Math.random() * allItems.length);
    selectedItems.push(allItems.splice(selectedIndex, 1)[0]);
  }
  return selectedItems;
};
