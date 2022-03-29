import React from 'react'

export default {
  title: 'Components/Alerts',
  component: ExamplesComponent
}

export const Examples = args => <ExamplesComponent/>
export const LinkColor = args => <LinkColorComponent/>
export const AdditionalContent = args => <AdditionalContentComponent/>

function ExamplesComponent() {
  return (
    <div>
      <section>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div class="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
        <div class="alert alert-info" role="alert">
          A simple info alert—check it out!
        </div>
        <div class="alert alert-light" role="alert">
          A simple light alert—check it out!
        </div>
        <div class="alert alert-dark" role="alert">
          A simple dark alert—check it out!
        </div>
      </section>

    </div>
  )
}

function LinkColorComponent() {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
        like.
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
        like.
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
        like.
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
        like.
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you
        like.
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div className="alert alert-dark" role="alert">
        A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </div>
    </div>
  )
}

function AdditionalContentComponent() {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit
          longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr/>
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
    </div>
  )
}
