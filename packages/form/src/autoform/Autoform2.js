import React from 'react'
import { Box } from '@chakra-ui/core'
import { FormControl, useFormContext } from '../index'

// export const getLabel = (item) => {
//   const words =
//     item.label ||
//     item.name
//       .split(/(?=[A-Z])/)
//       .map(capitalizeFirstLetter)
//       .join(' ')
//   return words
// }

function BoxFieldComponent({ field, options }) {
  return (
    <Box>
      <Box fontWeight='medium' my={2}>
        {/*{requiredMarker}*/}
        {field.label || field.name}:
      </Box>
      <FormControl item={field} options={options} />
    </Box>
  )
}

export default Autoform
