import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Indicator from  './Indicator'

const SlideIndicators = ({ slides, onChange }) => (
  <div className="carousel--indicators">
    {      slides.map((slide, index) => (      
      <Indicator key={index} index={index} active={slide.active===true} onChange={onChange} />
    ))}
  </div>
)

// Indicator.propTypes = {
//   slides: PropTypes.array.isRequired,
//   onChange: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => ({
  slides: state.carousel
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (index) => dispatch({ type: 'CHANGE_IMAGE', index })
})

export default connect( mapStateToProps, mapDispatchToProps )( SlideIndicators )
