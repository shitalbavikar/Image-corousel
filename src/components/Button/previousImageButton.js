import React from 'react';
import {connect} from 'react-redux';

import Button from './button'


const mapDispatchToProps = (dispatch) => ({
  onButtonClick: () => dispatch({ type: 'PREVIOUS_IMAGE' })
})

const mergeProps = (stateProps, dispatchProps, props) =>  ({
  ...stateProps,
  ...dispatchProps,
  ...props,
  className: 'carousel--button__previous'
})

const PreviousButton = connect(null, mapDispatchToProps, mergeProps )( Button )

export default PreviousButton