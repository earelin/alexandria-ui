import React from 'react'

export default {
  title: 'Theme/Content/Tables',
  component: OverviewComponent
}

export const Overview = args => <OverviewComponent/>
export const Variants = args => <VariantsComponent/>

function OverviewComponent() {
  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  )
}

function VariantsComponent() {
  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>

      <tr className="table-primary">
        <th scope="row">Primary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-secondary">
        <th scope="row">Secondary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-success">
        <th scope="row">Success</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-danger">
        <th scope="row">Danger</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-warning">
        <th scope="row">Warning</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-info">
        <th scope="row">Info</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-light">
        <th scope="row">Light</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr className="table-dark">
        <th scope="row">Dark</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      </tbody>
    </table>
  )
}

