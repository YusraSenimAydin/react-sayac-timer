import React, { Component } from 'react';

export default class ClassSayac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sayac: 0
    };
  }
  componentDidMount() {
    document.title = `${this.state.sayac} defa tıklandı`;
  }
  componentDidUpdate() {
    document.title = `${this.state.sayac} defa tıklandı`;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ sayac: this.state.sayac + 1 })}>
          Class Sayaç {this.state.sayac} defa tıklandı
        </button>
      </div>
    );
  }
}
