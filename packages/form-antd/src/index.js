import React from 'react'
import { Input, Radio, Select } from 'antd'
import { FormControl } from '@star-js/form'

const { Option } = Select

export const SelectControl = ({ value, onChange, optionItems }) => {
  return (
      <Select
          // key={item.name}
          placeholder='Select...'
          onChange={onChange}
          value={value}
      >
        {optionItems.map((option) => {
          const label = option.label || option.value
          return (
              <Option value={option.value} key={option.value}>
                {label}
              </Option>
          )
        })}
      </Select>
  )
}

function RadioGroup({ value, onChange, optionItems }) {
  console.log('v', value)
  return (
      <Radio.Group onChange={onChange} value={value}>
        {optionItems.map((option) => {
          const label = option.label || option.value
          return (
              <Radio value={option.value} key={option.value}>
                {label}
              </Radio>
          )
        })}
      </Radio.Group>
  )
}

//
// function ChakraCheckboxGroup({ value, onChange, optionItems }) {
//   console.log('v2', value)
//   return (
//     <CheckboxGroup onChange={onChange} value={value}>
//       {optionItems.map((option) => {
//         const label = option.label || option.value
//         return (
//           <Checkbox value={option.value} key={option.value}>
//             {label}
//           </Checkbox>
//         )
//       })}
//     </CheckboxGroup>
//   )
// }

function FieldComponent({ field, options, children }) {
  return (
      <div style={{ margin: '15px 0' }}>
        <div>
          {/*{requiredMarker}*/}
          {field.label || field.name}:
        </div>
        {/*{children}*/}
        <FormControl item={field} options={options} />
      </div>
  )
}

export const ErrorMsg = ({ children }) => {
  return <div>{children}</div>
}

export const DisplayValue = ({ children }) => {
  return <div>{children}</div>
}

export default {
  field: FieldComponent,
  displayValue: DisplayValue,
  errorMsg: ErrorMsg,
  input: Input,
  select: SelectControl,
  radioGroup: RadioGroup,
  checkboxGroup: Input
}
