import React from 'react'
import { FormContext } from './FormContext'
import { useForm } from './useForm'

export default function StarForm({
  // isEditing = false,
  // fields = [],
  // values = [],
  ...props
}) {
  // const value = useForm({ isEditing, fields, values })
  const value = useForm({ ...props })
  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  )
}
