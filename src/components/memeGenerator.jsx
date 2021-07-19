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
    this.setState({
      [name]: value
    });
  };

  render() {
    const { topText, bottomText, image } = this.state;
    return (
      <div>
        <form>
          <input type="text" name="topText" value={topText} placeholder="Enter Text" onChange={this.handleChange} />
          <input type="text" name="bottomText" value={bottomText} placeholder="Enter Text" onChange={this.handleChange} />
          <button type="submit">GENERATE</button>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
