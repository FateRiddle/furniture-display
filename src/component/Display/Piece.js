import React from 'react'

let Piece = ({ hidden,position,src }) => (
  hidden?null:
  <div style={{
    position:'absolute',
    zIndex:position[2],
    left:position[0],
    top:position[1],
  }}>
    <img src={require(`../../image/options/${src}`)} alt="no-show"/>
  </div>
)

export default Piece
