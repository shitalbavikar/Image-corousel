import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setImageData = ( imageData ) => {
    return {
        type: actionTypes.SET_IMAGE_DATA,
        carouselData: imageData
        
    };
};

export const setImagesFailed = () => {
    return {
        type: actionTypes.SET_IMAGES_FAILED
    };
};


export const nextImage = ( imageData ) => {
    return {
        type: actionTypes.NEXT_IMAGE,
        //imageData: imageData
    };
};

export const previousImage = ( name ) => {
    return {
        type: actionTypes.PREVIOUS_IMAGE,
      //  imageData: imageData
    };
};



export const initImageData = () => {
    return dispatch => {
        axios.get("https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&nojsoncallback=true")
            .then( response => {
               dispatch(setImageData(response.data.items));
            } )
            .catch( error => {
                dispatch(setImagesFailed());
            } );
    };
};




