import React from 'react'
import {
  Box,
  Input,
  Select,
  Text,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox
} from '@chakra-ui/core'
import { FormControl } from '@star-js/form'

export const ChakraSelectControl = ({ value, onChange, optionItems }) => {
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
          <option value={option.value} key={option.value}>
            {label}
          </option>
        )
      })}
    </Select>
  )
}

function ChakraRadioGroup({ value, onChange, optionItems }) {
  console.log('v', value)
  return (
    <RadioGroup onChange={onChange} value={value}>
      {optionItems.map((option) => {
        const label = option.label || option.value
        return (
          <Radio value={option.value} key={option.value}>
            {label}
          </Radio>
        )
      })}
    </RadioGroup>
  )
}

function ChakraCheckboxGroup({ value, onChange, optionItems }) {
  console.log('v2', value)
  return (
    <CheckboxGroup onChange={onChange} value={value}>
      {optionItems.map((option) => {
        const label = option.label || option.value
        return (
          <Checkbox value={option.value} key={option.value}>
            {label}
          </Checkbox>
        )
      })}
    </CheckboxGroup>
  )
}

function ChakraFieldComponent({ field, options, children }) {
  return (
    <Box>
      <Box fontWeight='medium' my={2}>
        {/*{requiredMarker}*/}
        {field.label || field.name}:
      </Box>
      {/*{children}*/}
      <FormControl item={field} options={options} />
    </Box>
  )
}

export const ChakraErrorMsg = ({ children }) => {
  return <Text color='red.500'>{children}</Text>
}

export const ChakraDisplayValue = ({ children }) => {
  return <Text my={2}>{children}</Text>
}

export default {
  field: ChakraFieldComponent,
  displayValue: ChakraDisplayValue,
  errorMsg: ChakraErrorMsg,
  input: Input,
  select: ChakraSelectControl,
  radioGroup: ChakraRadioGroup,
  checkboxGroup: ChakraCheckboxGroup
}
