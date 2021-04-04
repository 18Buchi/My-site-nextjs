import React, { Component } from "react";

export class LikeButton extends React.Component {
  render() {
    return (
      <>
        <button>Good💓</button>
        <style jsx>{`
          button {
            font-size: 0.8rem;
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
            font-size: 0.8rem;
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
