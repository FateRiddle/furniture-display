import React from 'react'

const getStyle = (active) => {
  if(active){
    return {
      color: "#df641e",
      backgroundColor: "#efefef",
    }
  } else {
    return {}
  }
}

const imageStyle = {
  height: 30,
}

const HeadIcon = ({ tab,active }) => (
  <div className='App-headIcon' style={getStyle(active)}>
  {
    active?<img style={imageStyle} src={require(`../../image/icons/${tab.icon2}`)} alt=""/>:
    <img style={imageStyle} src={require(`../../image/icons/${tab.icon}`)} alt=""/>
  }

    <div>{tab.name}</div>
  </div>
)

export default HeadIcon
