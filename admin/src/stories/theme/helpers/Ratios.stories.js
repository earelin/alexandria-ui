import React from 'react'

export default {
  title: 'Helpers/Ratios',
  component: ExampleComponent
}

export const Example = args => <ExampleComponent/>

export const AspectRatios = args => <AspectRatiosComponent/>

function ExampleComponent() {
  return (
    <div className="ratio ratio-16x9">
      <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
    </div>
  )
}

function AspectRatiosComponent() {
  return (
    <div>
      <div className="ratio ratio-1x1">
        <div>1x1</div>
      </div>
      <div className="ratio ratio-4x3">
        <div>4x3</div>
      </div>
      <div className="ratio ratio-16x9">
        <div>16x9</div>
      </div>
      <div className="ratio ratio-21x9">
        <div>21x9</div>
      </div>
    </div>
  )
}
