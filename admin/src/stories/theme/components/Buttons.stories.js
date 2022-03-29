import React from 'react'

export default {
  title: 'Components/Buttons',
  component: ExamplesComponent
}

export const Examples = args => <ExamplesComponent/>
export const ButtonTags = args => <ButtonTagsComponent/>
export const OutlineButtons = args => <OutlineButtonsComponent/>
export const Sizes = args => <SizesComponent/>

function ExamplesComponent() {
  return (
    <div className="hstack gap-3">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>

      <button type="button" className="btn btn-link">Link</button>
    </div>
  )
}

function OutlineButtonsComponent() {
  return (
    <div className="hstack gap-3">
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-secondary">Secondary</button>
      <button type="button" className="btn btn-outline-success">Success</button>
      <button type="button" className="btn btn-outline-danger">Danger</button>
      <button type="button" className="btn btn-outline-warning">Warning</button>
      <button type="button" className="btn btn-outline-info">Info</button>
      <button type="button" className="btn btn-outline-light">Light</button>
      <button type="button" className="btn btn-outline-dark">Dark</button>
    </div>
  )
}

function SizesComponent() {
  return (
    <div className="hstack gap-3">
      <button type="button" className="btn btn-primary btn-lg">Large button</button>
      <button type="button" className="btn btn-secondary btn-lg">Large button</button>
      <button type="button" className="btn btn-primary btn-sm">Small button</button>
      <button type="button" className="btn btn-secondary btn-sm">Small button</button>
    </div>
  )
}

function ButtonTagsComponent() {
  return (
    <div className="hstack gap-3">
      <a className="btn btn-primary" href="#" role="button">Link</a>
      <button className="btn btn-primary" type="submit">Button</button>
      <input className="btn btn-primary" type="button" value="Input"/>
      <input className="btn btn-primary" type="submit" value="Submit"/>
      <input className="btn btn-primary" type="reset" value="Reset"/>
    </div>
  )
}
