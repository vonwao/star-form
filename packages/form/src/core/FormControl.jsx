import React from 'react'
// import { Input, Select, Text } from '@chakra-ui/core'
import { useFormContext } from './FormContext'

export const FormControl = ({
  item,
  // value,
  options,
  onChangeValue
}) =>
  // :{
  // item: { name: string; optionsKey?: string; validation?: any };
  // options?: { [key: string]: { label: string; value: string }[] };
  // onChangeValue?: any;
  // }
  {
    // @ts-ignore
    // const { formState, formDispatch } = useEditSaveCancelContext();
    const {
      // @ts-ignore
      form,
      // @ts-ignore
      setForm,
      // @ts-ignore
      validation,
      // @ts-ignore
      errors,
      // @ts-ignore
      setErrors,
      editing,
      controlMap
    } = useFormContext()

    const onChangeImpl = (e) => {
      console.log('onChangeImpl', e.target)
      // console.log({ ...form, [item.name]: e.target.value })
      setForm({ ...form, [item.name]: e.target.value })
      // formDispatch({ type: 'SET_VALUE', name: item.name, value: e.target.value });

      // @ts-ignore
      const failRequiredValidation = item.required && !e.target.value
      const failValidation =
        validation[item.validation] &&
        !validation[item.validation][0](e.target.value)
      if (failRequiredValidation || failValidation) {
        const failValidationMsg = failValidation
          ? validation[item.validation][1]
          : ''
        const failRequiredValidationMsg = failRequiredValidation
          ? '(required)'
          : ''
        setErrors({
          ...errors,
          [item.name]: `${failValidationMsg} ${failRequiredValidationMsg}`
        })
        console.log('failed validation')
      } else {
        // ts
        // setErrors((oldErrors: { [x: string]: any; }) => {
        setErrors((oldErrors) => {
          delete oldErrors[item.name]
          return oldErrors
        })
      }
      onChangeValue && onChangeValue(e.target.value)
    }

    const controlType = item.type || 'input'
    const ControlComponent = controlMap[controlType]
    if (!ControlComponent) {
      console.error('no control component found for type: ', item.type)
    }
    const ErrorTextComp = controlMap.errorMsg
    const DisplayValueComp = controlMap.displayValue

    // console.log('form now', form)
    return editing ? (
      <div>
        <ControlComponent
          // value={form[item.name] || ''}
          value={form[item.name]}
          onChange={onChangeImpl}
          optionItems={options && options[item.optionsKey]}
        />
        <ErrorTextComp>{errors[item.name]}</ErrorTextComp>
      </div>
    ) : (
      <DisplayValueComp>
        {item.optionsKey // && options && options[item.optionsKey]
          ? options &&
            options[item.optionsKey].find(
              (opt) => opt.value === form[item.name]
            )?.label
          : form[item.name]}
      </DisplayValueComp>
    )
  }
