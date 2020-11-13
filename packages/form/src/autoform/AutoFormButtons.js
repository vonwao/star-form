import React from 'react'
import { IconButton } from '@chakra-ui/core'
import { useAutoFormContext } from './AutoFormContext'

export function EditButton() {
  // @ts-ignore
  const { editing, setEditing } = useAutoFormContext()
  return !editing ? (
    <IconButton
      data-testid='edit-button-rr'
      // type="primary"
      size='sm'
      onClick={() => {
        setEditing(true)
      }}
      icon='edit'
      aria-label='Edit'
    />
  ) : null
}

export function CancelButton() {
  // @ts-ignore
  const { editing, setEditing, setForm, oldForm } = useAutoFormContext()
  return editing ? (
    <IconButton
      data-testid='save-button-rr'
      size='sm'
      onClick={() => {
        setForm(oldForm)
        setEditing(false)
      }}
      icon='close'
      aria-label='Cancel'
      variantColor='red'
    />
  ) : null
}

export const SaveButton = ({ saveDisabled = true, onSave }: any) => {
  // @ts-ignore
  const { editing, setEditing, errors } = useAutoFormContext()

  // console.log('errors count: ', Object.keys(errors).length);
  const hasErrors = Object.keys(errors).length
  // todo: this doesn't work
  // const hasChanges = JSON.stringify(form) === JSON.stringify(oldForm);
  return (
    editing && (
      <IconButton
        data-testid='save-button-rr'
        style={{ marginRight: '5px' }}
        // type="primary"
        size='sm'
        onClick={async () => {
          await onSave()
          setEditing(false)
        }}
        // disabled={!hasFormChanges}
        icon='check'
        aria-label='Save'
        variantColor='green'
        // @ts-ignore
        disabled={hasErrors}
      />
    )
  )
}
