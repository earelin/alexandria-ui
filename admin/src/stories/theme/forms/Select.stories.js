import React from 'react'

export default {
  title: 'Forms/Select',
  component: DefaultComponent
}

export const Default = args => <DefaultComponent/>
export const Sizing = args => <SizingComponent/>
export const Size = args => <SizeComponent/>
export const Multiple = args => <MultipleComponent/>

function DefaultComponent() {
  return (
    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  )
}

function SizingComponent() {
  return (
    <div>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <select className="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

function MultipleComponent() {
  return (
    <select className="form-select" multiple aria-label="multiple select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  )
}

function SizeComponent() {
  return (
    <select className="form-select" size="3" aria-label="size 3 select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  )
}
