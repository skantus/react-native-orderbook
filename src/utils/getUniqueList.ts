import { OrderType } from 'src/api';

export const getUniqueList = (
  previousList: OrderType[] = [],
  currentList: OrderType[] = [],
) => [...new Map([...previousList, ...currentList])].filter(Boolean);
