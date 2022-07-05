import { database } from './dataRef'
import { remove, ref } from 'firebase/database'

export const dataRemove = (props: string) => {
  console.log(props)
  remove(ref(database, props))
    .then(() => console.log('called'))
    .catch((e) => console.log(e))
}
