import React from 'react'

import UserProfileWidget from '../../user/UserProfileWidget'

export default {
  title: 'User/User Profile Widget',
  component: UserProfileWidget
}

const Template = args => <UserProfileWidget {...args} />

export const Primary = Template.bind({})
Primary.args = {
  username: 'John Smith'
}
