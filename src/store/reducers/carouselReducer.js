import * as actionTypes from '../actions/actionTypes';




const carouselData =[ 
  {
    img: "assets/img/carousel-1.jpg",
    caption: "Carousel title 1"
  },
  {
    img: "assets/img/carousel-2.jpg",
    caption: "Carousel title 2"
  }]



const nextImage = ( state, action ) => {
  let currentIndex = state.findIndex((element) => ( element.active === true ))
  const nextIndex = currentIndex === state.length - 1 ? 0 : ++currentIndex
  return state.map((slide, index) => ({
    ...slide,
    active: index === nextIndex
  }))  
};

const previousImage = ( state, action ) => {
  let  currentIndex = state.findIndex((element) => ( element.active === true ))
  const previousIndex = currentIndex === 0 ? state.length - 1 : --currentIndex
  return state.map((slide, index) => ({
    ...slide,
    active: index === previousIndex
  }))
};

const changeImage = ( state, action ) => {
  return state.map((slide, index) => ({
    ...slide,
    active: index === action.index
  }))
};


const reducer = (state = [], action) => { 
  console.log(state) ;
  switch(action.type) {
    case actionTypes.NEXT_IMAGE: return nextImage( state, action );      
    case actionTypes.PREVIOUS_IMAGE: return previousImage(state,action);     
    case actionTypes.CHANGE_IMAGE: return changeImage(state,action);  
    case actionTypes.SET_IMAGE_DATA: return({...state}); 
    case actionTypes.SET_IMAGES_FAILED: return({...state}); 
    default: return state
  }
}

export default reducer


