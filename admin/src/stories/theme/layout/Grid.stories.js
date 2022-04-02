import React from 'react'

export default {
  title: 'Theme/Layout/Grid',
  component: ExampleComponent
}

export const Example = args => <ExampleComponent/>

function ExampleComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col border bg-light p-3">
          Column
        </div>
        <div className="col border bg-light p-3">
          Column
        </div>
        <div className="col border bg-light p-3">
          Column
        </div>
      </div>
    </div>
  )
}
