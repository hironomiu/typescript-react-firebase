import { ref, query, limitToLast, orderByKey } from 'firebase/database'
import { database } from './dataRef'

export const queryRef = (path: string) =>
  query(ref(database, path), limitToLast(10), orderByKey())
