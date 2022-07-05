import { dataRef } from './dataRef'
import { push, serverTimestamp } from 'firebase/database'

export const dataPush = (props: any) => {
  push(dataRef(props.refName), {
    name: props.name,
    text: props.text,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}
