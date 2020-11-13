export const fields = [
  {
    name: 'breakfast',
    label: 'What do you want for breakfast',
    required: true,
  },
  {
    name: 'bacon',
    type: 'select',
    label: 'Do you want bacon with that?',
    optionsKey: 'yesNo',
  },
  {
    name: 'eggCount',
    label: 'How many eggs?',
    validation: 'positive',
  },
  {
    name: 'eggType',
    type: 'radioGroup',
    label: 'How would you like your eggs?',
    optionsKey: 'eggTypes',
  },
]

export const options = {
  yesNo: [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ],
  eggTypes: [
    { value: 'SCR', label: 'Scrambled' },
    { value: 'SSU', label: 'Sunny Side Up' },
    { value: 'OE', label: 'Over Easy' },
  ],
}

export const validation = {
  positive: [(val) => !isNaN(val) && Number(val) >= 0, 'A positive number'],
}
