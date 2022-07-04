import { atom } from 'recoil'

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
})

export const userState = atom({
  key: 'user',
  default: { nickname: '', email: '' },
})
