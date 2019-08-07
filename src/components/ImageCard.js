import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // Referencing a single DOM element
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // calls after image is loaded on-screen
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // When rendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }
  
  render() {
    const { description, urls } = this.props.image;
    
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={ this.imageRef } alt={ description } src={ urls.regular } />
      </div>
    );
  }
}

export default ImageCard;