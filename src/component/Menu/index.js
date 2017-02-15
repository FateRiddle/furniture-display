import React from 'react'
import MenuList from './MenuList'
import Selectables from './Selectables'
import MenuHead from './MenuHead'

const Menu = () =>
  <div className='App-menu'>
    <MenuHead />
    <MenuList />
    <Selectables />
  </div>

export default Menu
