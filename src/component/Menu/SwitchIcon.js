import React from 'react'
import switchIcon from '../../image/icons/switchIcon.png'

const SwitchIcon = ({ switchable }) => (
  switchable?<img src={switchIcon} alt='' /> :
  null
)

export default SwitchIcon
