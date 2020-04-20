import React, { Fragment } from "react";
import GameTile from "./gameTile";

import "./searchPage.css";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      gameTileData: null
    };
  }
  componentDidMount() {
    const url = "./gamesext.json";
    this.fetchGameData(url);
  }
  fetchGameData = url => {
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST, PUT",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Server: "cloudflare-nginx"
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          gameTileData: data
        })
      );
  };
  render() {
    const { gameTileData } = this.state;
    return (
      <Fragment>
        <h2>Game Search App</h2>
        <div className="searchpage-wrapper">
          {gameTileData &&
            gameTileData.map((gameTileItem, index) => {
              return <GameTile data={gameTileItem} key={index} />;
            })}
        </div>
      </Fragment>
    );
  }
}

export default SearchPage;
