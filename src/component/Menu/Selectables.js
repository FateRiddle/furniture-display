import React from 'react'
import { connect } from 'react-redux'
import { changeOption } from '../../actions'

const getStyle = (currentOption,index) => {
  if(currentOption === index+1){
    return {
      height:101,
      width:101,
      border:'3px solid orange',
    }
  } else {
    return {
      height:101,
      width:101,
      borderWidth:3,
    }
  }


}

let Selectables = ({
  p,
  currentOption,
  pieces,
  changeOption,
}) => {
  return (
    <ul className='App-selectables'>
      {
        pieces.byId[p].options.map((option,index) => {
          return (
            <li key={index}>
              <img style={getStyle(currentOption,index)}
                src={require(`../../image/options/${pieces.byId[p].folder}/${index+1}.${pieces.byId[p].format}`)}
                alt="block"
                onClick={()=>{
                  changeOption(p,index+1)
                }}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ currentTab, currentPiece, pieces }) => {
  const p = currentPiece[currentTab-1]
  return {
    p,
    currentOption: pieces.byId[p].currentOption,
    pieces,
  }
}


Selectables = connect(
  mapStateToProps,
  {changeOption},
)(Selectables)

export default Selectables
