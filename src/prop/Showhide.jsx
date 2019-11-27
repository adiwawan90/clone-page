import React, { Component } from 'react';
import './style.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togleStatus: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //nama eventShow
    this.setState(state => ({
      togleStatus: !state.togleStatus
    }));
  }

  render() {
    return (
      <div>
        <center>
          <button onClick={this.handleClick}>
            {this.state.togleStatus ? 'TUTUP' : 'BUKA'}
          </button>
          {this.state.togleStatus ? (
            <div>
              <img src={require('../p15.jpg')} className='imagesliderr' />
              <div>
                <center>
                  Nama: Adi Setyawan
                  <br />
                  A Newbie Programmer
                  <br />
                  Whats I'm Learn Now ?<br />
                  Learning for FullStack Javascript
                  <br />
                </center>
              </div>
            </div>
          ) : (
            ''
          )}
        </center>
      </div>
    );
  }
}

// <img src={require('../p15.jpg')} alt="bantu"/>

class Show extends Component {
  render() {
    return (
      <div className='wrapperapp'>
        <header className='App-header'>
          <Toggle />
        </header>
      </div>
    );
  }
}

export default Show;
