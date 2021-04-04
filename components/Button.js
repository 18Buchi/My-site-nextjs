import React from "react";
// import Counter from "./Counter"

export class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.countUp = this.countUp.bind(this);
  }
  countUp() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  
  render() {

    return (
      <>
        <button onClick={this.countUp}> Good💓 {this.state.count}</button>
        <style jsx>{`
          button {
            width: 18%;
            min-width: 70px;
            font-size: 2vw;
            background: pink;
            padding: 3px 8px;
            border-radius: 6px;
            margin-bottom: 0 20px;
             {
              /* position: absolute;
            left: 8%; */
            }
          }
        `}</style>
      </>
    );
  }
}

export class BadButton extends React.Component {
  render() {
    return (
      <>
        <button>Bad😱</button>
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
