import { dataRef } from './dataRef'
import { remove } from 'firebase/database'

export const dataRemove = (path: string) => {
  remove(dataRef(path)).catch((e) => console.log(e))
}
