import React, { PropTypes} from 'react';

const Button = ({className, onClickEvent}) => (
    <div className ={className} onClick ={onClickEvent}/>
)

// Button.PropTypes = {
// 	className: PropTypes.string.isRequired,
// 	onClickEvent: PropTypes.func.isRequired
// }

export default Button;