import React from "react";
import { useFormContext } from "../core/FormContext";

// export const getLabel = (item) => {
//   const words =
//     item.label ||
//     item.name
//       .split(/(?=[A-Z])/)
//       .map(capitalizeFirstLetter)
//       .join(' ')
//   return words
// }

// function BoxFieldComponent({ field, options }) {
//   return (
//     <Box>
//       <Box fontWeight='medium' my={2}>
//         {/*{requiredMarker}*/}
//         {field.label || field.name}:
//       </Box>
//       <FormControl item={field} options={options} />
//     </Box>
//   )
// }
//
// function AutoForm({ fields, fieldComponent, options }) {
//   return (
//     <div>
//       {fields.map((field) => {
//         const Comp = fieldComponent || BoxFieldComponent
//         return <Comp key={field.name} field={field} options={options} />
//       })}
//     </div>
//   )
// }

function Autoform({ fields: fieldsArg }) {
  console.log("AutoForm");
  const { optionsMap, controlMap, fields } = useFormContext();
  fieldsArg = fieldsArg || fields;
  if (!controlMap) {
    console.error("no control map");
    return null;
  } else if (!controlMap.field) {
    console.error("no field component");
    return null;
  }
  return (
    <div>
      {fieldsArg.map(field => {
        const Comp = controlMap.field;
        return <Comp key={field.name} field={field} options={optionsMap} />;
      })}
    </div>
  );
}

export default Autoform;
