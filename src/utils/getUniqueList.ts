import { OrderType } from 'src/api';

const getUniqueList = (
  previousList: OrderType[] = [],
  currentList: OrderType[] = [],
) => [...new Map([...previousList, ...currentList])].filter(Boolean).sort();

export { getUniqueList };
