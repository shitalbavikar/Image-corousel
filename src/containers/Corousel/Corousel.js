import React, {Component} from 'react';
import { connect } from 'react-redux';
import PreviousImageButton from '../../components/Button/previousImageButton';
import NextImageButton from '../../components/Button/nextImageButton';
import ActiveSlide from '../../components/Slide/activeSlide';
import SlideIndicators from '../../components/Slide/slideIndicators';
import * as actions from '../../store/actions/index';

class Carousel  extends Component {
    
    componentDidMount () {
        console.log("Inside componentDidMount" +this.props); 
        this.props.initImageData();
    }
    render () {
        return ( <div className="carousel">
    <ActiveSlide />
    <PreviousImageButton />
    <NextImageButton />
    <SlideIndicators/>
    
  </div>
  )
}
}
const mapStateToProps = state => {
    return {      
      carousel : state.carousel.carousel
    };    
}

const mapDispatchToProps = dispatch => {
    return {      
        initImageData: () =>  dispatch(actions.initImageData())        
    }
}

export default connect( mapStateToProps, mapDispatchToProps)( Carousel );


// const Carousel = () => (
//     <div className="carousel">
//       <ActiveSlide />
//       <PreviousImageButton />
//       <NextImageButton />
//       <SlideIndicators />
//     </div>
//   )
  
//   export default Carousel