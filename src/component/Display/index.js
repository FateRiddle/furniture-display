import React from 'react'
import { connect } from 'react-redux'
import { tabs } from '../../data'
import Piece from './Piece'

const backgroundImages = (currentTab) => {
  const { background,name } = tabs[currentTab - 1]
  return (
    <img style={{position:'relative'}}
      src={require(`../../image/backgrounds/${background}`)}
      alt={name}
    />
  )
}

const items = (pieces,currentTab) => {
  const filteredPieces = pieces.allIds.filter(id => pieces.byId[id].tabId === currentTab)
  return filteredPieces.map( id => {
      const p = pieces.byId[id]
      return (
        <Piece key={id} hidden={!p.show}
          position={p.position}
          src={`${p.folder}/${p.currentOption}x.${p.format}`}
        />
      )
    })
}

let Display = ({
  currentTab,
  pieces,
}) => (
  <div className="App-display">
    {
      backgroundImages(currentTab)
    }
    <div>
      {items(pieces,currentTab)}
    </div>
  </div>
)

const mapStateToProps = ({ currentTab,pieces }) => ({
  currentTab,
  pieces,
})

Display = connect(mapStateToProps)(Display)

export default Display
