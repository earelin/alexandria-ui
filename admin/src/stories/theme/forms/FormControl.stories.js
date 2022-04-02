import React from 'react'

export default {
  title: 'Theme/Forms/Form control',
  component: ExamplesComponent
}

export const Examples = args => <ExamplesComponent/>
export const Sizing = args => <SizingComponent/>
export const Disabled = args => <DisabledComponent/>
export const Readonly = args => <ReadonlyComponent/>
export const FileInput = args => <FileInputComponent/>

export const Color = args => <ColorComponent/>

function ExamplesComponent() {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
      </div>
    </div>
  )
}

function SizingComponent() {
  return (
    <div className="vstack gap-2">
      <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"
             aria-label=".form-control-lg example"/>
      <input className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
      <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"
             aria-label=".form-control-sm example"/>
    </div>
  )
}

function DisabledComponent() {
  return (
    <div className="vstack gap-2">
      <input className="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example"
             disabled/>
      <input className="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example"
             disabled readOnly/>
    </div>
  )
}

function ReadonlyComponent() {
  return (
    <div>
      <input className="form-control" type="text" value="Readonly input here..." aria-label="readonly input example"
             readOnly/>
    </div>
  )
}

function FileInputComponent() {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">Default file input example</label>
        <input className="form-control" type="file" id="formFile"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
        <input className="form-control" type="file" id="formFileMultiple" multiple/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileDisabled" className="form-label">Disabled file input example</label>
        <input className="form-control" type="file" id="formFileDisabled" disabled/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">Small file input example</label>
        <input className="form-control form-control-sm" id="formFileSm" type="file"/>
      </div>
      <div>
        <label htmlFor="formFileLg" className="form-label">Large file input example</label>
        <input className="form-control form-control-lg" id="formFileLg" type="file"/>
      </div>
    </div>
  )
}

function ColorComponent() {
  return (
    <div>
      <label htmlFor="exampleColorInput" className="form-label">Color picker</label>
      <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c"
             title="Choose your color"/>
    </div>
  )
}
