import React from 'react'
import { connect } from 'react-redux'

import Slide from '../Slide/slide'

const mapStateToProps = (state) => {
  console.log("carousel"+ state.carousel);
  const { img, caption } = state.carousel? state.carousel.find((element) => ( element.active === true )): [];
  return {
    img,
    caption
  }
}

const ActiveSlide = connect( mapStateToProps )( Slide )

export default ActiveSlide
