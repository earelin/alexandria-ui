import React from 'react'

export default {
  title: 'Theme/Content/Typography',
  component: HeadingsComponent
}

export const Headings = args => <HeadingsComponent/>
export const DisplayHeadings = args => <DisplayHeadingsComponent/>
export const Lead = args => <LeadComponent/>
export const InlineTextElements = args => <InlineTextElementsComponent/>
export const Blockquotes = args => <BlockquotesComponent/>
export const Abbreviations = args => <AbbreviationsComponent/>

function HeadingsComponent() {
  return (
    <div>
      <h1>H1. Lorem ipsum dolor sit amet</h1>
      <h2>H2. Lorem ipsum dolor sit amet</h2>
      <h3>H3. Lorem ipsum dolor sit amet</h3>
      <h4>H4. Lorem ipsum dolor sit amet</h4>
      <h5>H5. Lorem ipsum dolor sit amet</h5>
      <h6>H6. Lorem ipsum dolor sit amet</h6>
    </div>
  )
}

function DisplayHeadingsComponent() {
  return (
    <div className="card-body">
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
    </div>
  )
}

function LeadComponent() {
  return (
    <div>
      <p className="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
      </p>
    </div>
  )
}

function InlineTextElementsComponent() {
  return (
    <div>
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      <p><u>This line of text will render as underlined.</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
    </div>
  )
}

function AbbreviationsComponent() {
  return (
    <div>
      <p><abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
    </div>
  )
}

function BlockquotesComponent() {
  return (
    <blockquote className="blockquote">
      <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
  )
}
