import React, { graphql, useStaticQuery, useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";



export const photos = [
    {
      src: require("../images/wit/1.jpg"),
      width: 4,
      height: 3
    },
    {
      src: require("../images/wit/2.jpg"),
      width: 1,
      height: 1
    },
    {
        src: require("../images/wit/3.jpg"),
        width: 3,
        height: 4
      },
      {
        src: require("../images/wit/4.jpg"),
        width: 3,
        height: 4
      },
      {
        src: require("../images/wit/5.jpg"),
        width: 3,
        height: 4
      },
      {
        src: require("../images/wit/6.jpg"),
        width: 4,
        height: 3
      },
      {
        src: require("../images/wit/7.jpg"),
        width: 3,
        height: 4
      },
      {
        src: require("../images/wit/8.jpg"),
        width: 4,
        height: 3
      },
      {
        src: require("../images/wit/9.jpg"),
        width: 4,
        height: 3
      }
    
  ];

function Photos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Photos