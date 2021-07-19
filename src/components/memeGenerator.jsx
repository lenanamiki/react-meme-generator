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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="topText" value={topText} placeholder="Enter Text" onChange={this.handleChange} />
          <input type="text" name="bottomText" value={bottomText} placeholder="Enter Text" onChange={this.handleChange} />
          <button type="submit">GENERATE</button>
        </form>
        <div>
          <img src={image} alt="meme" />
          <h2>{topText}</h2>
          <h2>{bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
