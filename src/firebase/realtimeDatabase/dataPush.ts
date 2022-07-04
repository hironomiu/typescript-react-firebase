import { database } from './dataRef'
import { push, ref } from 'firebase/database'

export const dataPush = (props: any) => {
  push(ref(database, props.refName), {
    name: props.name,
    text: props.text,
  })
}
