import React from 'react';
import Gallery from 'react-grid-gallery';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return {
            src: image.urls.regular,
            thumbnail: image.urls.small,
            thumbnailWidth: 360,
            thumbnailHeight: 360,
            caption: image.alt_description,
        }
    });
    
    return(
     <div className='container mt-1 mb-3'>
        <Gallery images={images}/>,
    </div>);
}

export default ImageList;