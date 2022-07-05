import { query, limitToLast, orderByKey } from 'firebase/database'
import { dataRef } from './dataRef'

export const queryRef = (path: string) =>
  query(dataRef(path), limitToLast(10), orderByKey())
