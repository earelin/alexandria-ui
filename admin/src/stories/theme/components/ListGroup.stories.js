import React from 'react'

export default {
  title: 'Theme/Components/List group',
  component: ExampleComponent
}

export const BasicExample = args => <ExampleComponent/>

function ExampleComponent() {
  return (
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  )
}
