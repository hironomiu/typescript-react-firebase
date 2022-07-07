import { dataRef } from './dataRef'
import { push, serverTimestamp } from 'firebase/database'

type Props = {
  refName: string
  name: string
  text: string
}

export const dataPush = (props: Props) => {
  push(dataRef(props.refName), {
    name: props.name,
    text: props.text,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}
