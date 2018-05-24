import React from 'react';
import ReactDOM from 'react-dom';
import Annotation from './Annotation';
import PrePolygon from './PrePolygon';
import PreRectangle from './PreRectangle';

const Annotator = ({
  imageWidth,
  imageHeight,
  hix,
  aix,
  pix,
  src,
  mode,
  annotationShape,
  preAnnotation,
  annotations,
  onImageLoad,
  onLabelChange,
  onAddPoint,
  onMouseMove,
  onKeyDown,
  onPointMouseDown,
  onPointMouseUp,
  onPointMouseEnter,
  onPointMouseLeave,
  onPolygonMouseDown,
  onPolygonMouseUp,
  onPolygonMouseEnter,
  onPolygonMouseLeave,
  onPreAnnotationMouseDown,
  onPreAnnotationMouseUp,
  onPreAnnotationMouseMove,
  onPrePointMouseEnter,
  onPrePointMouseLeave,
  onPrePointClick,
}) => (
  <div className='annotatorContainer'>
    <img
      src={src}
      onLoad={onImageLoad}
    />
    <svg
      className='ori'
      tabIndex='0'
      width={imageWidth}
      height={imageHeight}
      onMouseMove={mode.startsWith('MOVE') ? onMouseMove : null}
      onKeyDown={hix === -1 ? onKeyDown : null}
    >
      {
        mode === 'PRE_ANNOTATION'
          ? annotationShape === 'polygon'
            ? <PrePolygon
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                aix={-1}
                pix={pix}
                preAnnotation={preAnnotation}
                onAddPoint={onAddPoint}
                onPrePointMouseEnter={onPrePointMouseEnter}
                onPrePointMouseLeave={onPrePointMouseLeave}
                onPrePointClick={onPrePointClick}
              />
            : <PreRectangle
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                aix={-1}
                pix={pix}
                preAnnotation={preAnnotation}
                onPreAnnotationMouseDown={onPreAnnotationMouseDown}
                onPreAnnotationMouseUp={onPreAnnotationMouseUp}
                onPreAnnotationMouseMove={onPreAnnotationMouseMove}
              />
          : null
      }
      {
        annotations.map((annotation, index) => (
          <Annotation
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            key={index}
            hix={hix}
            aix={index}
            mode={mode}
            hover={hix === index}
            annotation={annotation}
            onLabelChange={onLabelChange}
            onPointMouseDown={onPointMouseDown}
            onPointMouseUp={onPointMouseUp}
            onPointMouseEnter={onPointMouseEnter}
            onPointMouseLeave={onPointMouseLeave}
            onPolygonMouseDown={onPolygonMouseDown}
            onPolygonMouseUp={onPolygonMouseUp}
            onPolygonMouseEnter={onPolygonMouseEnter}
            onPolygonMouseLeave={onPolygonMouseLeave}
          />
        ))
      }
    </svg>
  </div>
)

export default Annotator;
