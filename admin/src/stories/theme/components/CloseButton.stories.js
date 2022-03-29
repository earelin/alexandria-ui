import React from 'react'

export default {
  title: 'Components/Close button',
  component: ExampleComponent
}

const WhiteVariantTemplate = args => <WhiteVariantComponent/>

export const Example = args => <ExampleComponent/>
export const DisabledState = args => <DisabledStateComponent/>
export const WhiteVariant = WhiteVariantTemplate.bind({})
WhiteVariant.parameters = {
  backgrounds: { default: 'dark' }
}

function ExampleComponent() {
  return (
    <button type="button" className="btn-close" aria-label="Close"/>
  )
}

function DisabledStateComponent() {
  return (
    <button type="button" className="btn-close" disabled aria-label="Close"/>
  )
}

function WhiteVariantComponent() {
  return (
    <div>
      <button type="button" className="btn-close btn-close-white" aria-label="Close"/>
      <button type="button" className="btn-close btn-close-white" disabled aria-label="Close"/>
    </div>
  )
}
