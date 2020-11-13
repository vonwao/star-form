import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

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
          <MenuItem value={option.value} key={option.value}>
            {label}
          </MenuItem>
        )
      })}
    </Select>
  )
}

function MuiRadioGroup({ value, onChange, optionItems }) {
  console.log('v', value)
  return (
    <RadioGroup onChange={onChange} value={value}>
      {optionItems.map((option) => {
        const label = option.label || option.value
        return (
          <FormControlLabel
            value={option.value}
            key={option.value}
            control={<Radio />}
            label={label}
          />
        )
      })}
    </RadioGroup>
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

export const ChakraErrorMsg = ({ children }) => {
  return <div>{children}</div>
}

export const ChakraDisplayValue = ({ children }) => {
  return <div>{children}</div>
}

export default {
  displayValue: ChakraDisplayValue,
  errorMsg: ChakraErrorMsg,
  input: TextField,
  select: ChakraSelectControl,
  radioGroup: MuiRadioGroup,
  checkboxGroup: TextField
}
