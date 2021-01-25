import React, { Component } from 'react';
import './App.css'; 
import Image from './Image/Image';
import image_1 from './img/jason-leung-RkzYaP7d74g-unsplash.jpg';
import image_2 from './img/weronika-7thLEv_FDeY-unsplash.jpg';
import image_3 from './img/paul-6T7kfc3VitU-unsplash.jpg';
import image_4 from './img/kiki-siepel-BEwxLSN_bKU-unsplash.jpg';

class App extends Component {
  state = {
    images: [
      { url: image_1, name: 'Orange' },
      { url: image_2, name: 'Purple' },
      { url: image_3, name: 'White' },
      { url: image_4, name: 'Pink' },
    ], 
    showImages: true,
  } 

  deleteAnImage = (index) => {
    const images = this.state.images;
    console.log('yes')
    images.splice(index, 1);
    this.setState({images: images});
  }
  toggleImages = () => {
    const showIt = this.state.showImages;
    this.setState( { showImages: !showIt } );
  }

  render () {
    const bodyStyle = {  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }; 
    const boxDiv = {
      width: '600px',
      paddingTop: '20px',
      lineHeight: '30px',
    } 
    let buttonStyle = {
      padding: '5px',
      marginTop: '10px',
      marginBottom: '30px', 
    };

    let images;
    if ( this.state.showImages ) {
      images = (
          <div>
            {
              this.state.images.map((image, index) => {
                return <Image 
                click={() => this.deleteAnImage(index)}
                url={image.url} 
                name={image.name}  />
              })
            }
          </div>
        );  
    }

    return (
      <div style={bodyStyle}> 
        <div style={boxDiv}>
          This pages is to show you how to toggle images and 
          <br />
          how to be disappeared when clicked.
          <br />
          <button style={buttonStyle} onClick={this.toggleImages} >Show/Hide All Images</button>
          {images}
        </div>
      </div>
    );
  }
}

export default App;
