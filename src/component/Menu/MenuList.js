import React from 'react'
import { connect } from 'react-redux'
import { changeVisibility,changePiece } from '../../actions'
import SwitchIcon from './SwitchIcon'
import HiddenIcon from './HiddenIcon'

const filteredPieces = (pieces, currentTab) =>
  pieces.allIds.filter(id => pieces.byId[id].tabId === currentTab)

const getStyle = (currentPiece,id) => {
  if(id === currentPiece){
    return {
      color:"#df641e",
    }
  }
}

let MenuList = ({
  currentTab,
  currentPiece,
  pieces,
  changeVisibility,
  changePiece,
}) => {
  return (
    <ul className="App-menuList">
      {
        filteredPieces(pieces, currentTab).map(id => {
          const piece = pieces.byId[id]
          const switchable = (piece.options.length > 1)
          return (
            <li key={id} onClick={() => changePiece(id)}
              style={getStyle(currentPiece,id)}
            >
              <span>
                {piece.name}
              </span>
              <span className='SwitchIcon'>
                <SwitchIcon switchable={switchable} />
              </span>
              <span
                onClick={() => changeVisibility(id)}
              >
                <HiddenIcon hidden={!piece.show} />
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ pieces,currentTab,currentPiece }) => ({
  pieces,
  currentTab,
  currentPiece:currentPiece[currentTab-1],
})

MenuList = connect(
  mapStateToProps,
  {
    changeVisibility,
    changePiece,
  },
)(MenuList)

export default MenuList
