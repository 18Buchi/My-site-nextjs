import React from "react";

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
        <button
          onClick={this.countUp}
          className="rounded w-1/4 max-w-likeButton 
         text-xs px-3 py-1 mx-2 my-2 bg-pink-500 bg-opacity-30"
        >
          {" "}
          Good💓 {this.state.count}
        </button>
      </>
    );
  }
}

export class BuyButton extends React.Component {
  render() {
    return (
      <div>
        <a href="https://suzuri.jp/Buchi18">
          <button className="fixed bottom-16 right-12 rounded-xl bg-gray-500 hover:bg-gray-600 shadow-buyButton px-3 py-3 text-white font-semibold ">
            Want to buy !!
            <br />
            購入する
          </button>
        </a>
      </div>
    );
  }
}
