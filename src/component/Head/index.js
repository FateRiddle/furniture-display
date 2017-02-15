import React from 'react'
import { connect } from 'react-redux'
import { tabs } from '../../data'
import { changeTab,changePiece } from '../../actions'
import HeadIcon from './HeadIcon'

//press gouwuche
const getCurrentSelection = pieces => {
  let selection = ''

  const getProductCode = id => {
    const piece = pieces.byId[id]
    return piece.options[piece.currentOption-1]
  }
  const handle = id => {
    selection += getProductCode(id) + '^'
  }

  pieces.allIds.forEach(handle)
  selection = selection.substring(0,selection.length-1)
  return selection
}

const passData = pieces => {
  const node = document.getElementById('data')
  const value = getCurrentSelection(pieces)
  node.setAttribute('value',value)
  console.log(node.getAttribute('value'))
}

let Head = ({
  pieces,
  currentTab,
  changeTab,
  changePiece,
}) => {
  return (
    <div className='App-header'>
      <ul className='App-nav'>
        {
          tabs.map((tab,index) => (
            <li
              key={index}
              onMouseOver={() => {
                changeTab(index+1)
              }}
            >
              <HeadIcon tab={tab} active={index+1 === currentTab} />
            </li>
          ))
        }
      </ul>
      <ul className='App-navRight'>
        <li>
          <img src={require('../../image/icons/3dtiyan.png')} alt=""/>
          3D体验
        </li>
        <li id='gouwuche' onClick={() => passData(pieces)}>
          <img src={require('../../image/icons/gouwuche.png')} alt=""/>
          加入购物车
        </li>
      </ul>
    </div>
  )
}

// Head.propTypes = {
//   tabs: React.PropTypes.array(React.PropTypes.number)
// }

const mapStateToProps = ({ currentTab,pieces }) => ({
  currentTab,
  pieces,
})

Head = connect(
  mapStateToProps,
  {
    changeTab,
    changePiece,
  },
)(Head)

export default Head
