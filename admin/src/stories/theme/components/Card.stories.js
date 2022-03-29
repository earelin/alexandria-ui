import React from 'react'

export default {
  title: 'Components/Card',
  component: ExampleComponent
}

export const Example = args => <ExampleComponent/>

function ExampleComponent() {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
      <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
           role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"/>
        <text x="37%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
      </svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
