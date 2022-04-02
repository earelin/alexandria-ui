import React from 'react'

import Login from '../../user/Login'

export default {
  title: 'User/Login Form',
  component: Login
}

const Template = args => <Login {...args} />

export const Primary = Template.bind({})
