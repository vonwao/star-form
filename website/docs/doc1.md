---
id: doc1
title: Basic Usage
sidebar_label: Basic Usage
slug: /
---



Install:
```
npm i @star-js/form
```

## Basic Use Case:

Sample form schema:
```javascript
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
```

imports:
```javascript
import {
  StarForm,
  useForm,
  FormContext,
  AutoForm,
  htmlComponentMap,
} from '@star-js/form'

import { fields, options, validation } from './schema'
```

render form:
```javascript
       <StarForm
          isEditing
          fields={fields}
          validatio={validation}
          // values: {},
          optionsMap={options}
          controlMap={htmlComponentMap}
        >
          <AutoForm fields={fields} options={options} />
          {/*<pre>{JSON.stringify(autoForm.form)}</pre>*/}
        </StarForm>
```


```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

![img](../static/img/logo.svg)

---
---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::

You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

