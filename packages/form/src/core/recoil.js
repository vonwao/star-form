import { atom, atomFamily } from 'recoil'

export const getFormAtom = atom({
  key: '$form/field/$value',
  default: undefined
})

// export const getFieldValueAtom = atomFamily({
//   key: '$form/field/$value',
//   default: undefined
// })
