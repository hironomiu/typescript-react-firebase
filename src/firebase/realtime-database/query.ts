import { ref, query, limitToLast } from 'firebase/database'
import { database } from './dataRef'

export const queryRef = query(ref(database, 'messages'), limitToLast(10))
