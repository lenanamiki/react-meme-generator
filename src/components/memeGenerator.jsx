import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: 'top text',
      bottomText: 'bottom text',
      image: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    const { topText, bottomText, image } = this.state;
    return (
      <div>
        <p>{topText}</p>
        <p>{bottomText}</p>
        <img src={image} alt="meme" />
      </div>
    );
  }
}

export default MemeGenerator;
