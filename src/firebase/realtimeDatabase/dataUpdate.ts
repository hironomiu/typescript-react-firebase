import { dataRef } from './dataRef'
import { update, serverTimestamp } from 'firebase/database'

type Props = {
  path: string
  name: string
  text: string
}
export const dataUpdate = (props: Props) => {
  update(dataRef(props.path), {
    name: props.name,
    text: props.text,
    updatedAt: serverTimestamp(),
  })
}
