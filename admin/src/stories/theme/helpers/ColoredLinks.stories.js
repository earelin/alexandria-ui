import React from 'react'

export default {
  title: 'Theme/Helpers/Colored links',
  component: ExampleComponent
}

export const Example = args => <ExampleComponent/>

function ExampleComponent() {
  return (
    <div className="hstack gap-3">
      <a href="#" className="link-primary">Primary link</a>
      <a href="#" className="link-secondary">Secondary link</a>
      <a href="#" className="link-success">Success link</a>
      <a href="#" className="link-danger">Danger link</a>
      <a href="#" className="link-warning">Warning link</a>
      <a href="#" className="link-info">Info link</a>
      <a href="#" className="link-light">Light link</a>
      <a href="#" className="link-dark">Dark link</a>
    </div>
  )
}
