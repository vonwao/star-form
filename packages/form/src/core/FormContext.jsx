import React from 'react'

// @ts-ignore
export const FormContext = React.createContext('form')

export function useFormContext() {
  const context = React.useContext(FormContext)
  console.log('useFormContext  === ', context)
  if (!context) {
    throw new Error(
      'AutoFormContext compound components cannot be rendered outside the AutoFormContext component'
    )
  }
  return context
}
