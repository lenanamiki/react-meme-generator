import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      image: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    const randMeme = allMemeImgs[randNum].url;
    this.setState({ image: randMeme });
  };

  render() {
    const { topText, bottomText, image } = this.state;
    return (
      <div>
        <form className="meme-form container" onSubmit={this.handleSubmit}>
          <input type="text" name="topText" value={topText} placeholder="Enter top text for meme" onChange={this.handleChange} />
          <input type="text" name="bottomText" value={bottomText} placeholder="Enter bottom text for meme" onChange={this.handleChange} />
          <button type="submit">GENERATE</button>
        </form>
        <div className="meme-container">
          <div className="image-container">
            <img className="meme-img" src={image} alt="meme" />
            <div className="text-container">
              <p className="meme-text">{topText}</p>
              <p className="meme-text">{bottomText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
