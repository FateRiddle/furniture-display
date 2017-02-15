import React from 'react'
import hiddenIcon from '../../image/icons/eye-hidden.png'
import showIcon from '../../image/icons/eye-show.png'

const HiddenIcon = ({ hidden }) => (
  hidden?<img src={hiddenIcon} alt='hidden' /> :
  <img src={showIcon} alt='show' />
)

export default HiddenIcon
