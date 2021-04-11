import React from "react";

// import Counter from "./Counter"

export class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  componentDidUpdate() {
    localStorage.setItem("c", JSON.stringify(this.state.count));
  }
  componentDidMount() {
    this.setState({
      count: JSON.parse(localStorage.getItem("c")) || [],
    });
  }

  render() {
    return (
      <>
        <button className="bg-pink-300 text-xxs sm:text-xs md:text-base " onClick={this.countUp}> {this.props.b} {this.state.count}</button>
       
      </>
    );
  }
}

export class BadButton extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.countUp}> {this.props.b} {this.state.count}</button>
        <style jsx>{`
          button {
            width: 18%;
            min-width: 70px;
            font-size: 2vw;
            background: rgb(193, 187, 245);
            padding: 3px 12px;
            border-radius: 6px;
            margin-bottom: 0 20px;
          }
        `}</style>
      </>
    );
  }
}

export class BuyButton extends React.Component {
  render() {
    return (
      <>
        <a href="https://suzuri.jp/Buchi18" className="underNav">
          <button>
            Want to buy !!
            <br />
            購入する
          </button>
        </a>
        <style jsx>{`
          button {
            font-weight: semi-bold;
            border-radius: 6px;
            box-shadow: 1px 2px 10px gray;
            color: white;
            padding: 7px 15px;
            background: #777;
            position: fixed;
            bottom: 8%;
            right: 8%;
            z-index: 1;
          }
          button:hover {
            background: #444;
          }
        `}</style>
      </>
    );
  }
}
