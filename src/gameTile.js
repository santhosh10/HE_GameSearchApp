import React from "react";
import "./gameTile.css";

class GameTile extends React.Component {
  render() {
    const {
      title,
      platform,
      score,
      genre,
      editors_choice,
      release_year
    } = this.props.data;
    return (
      <div className="game-tile-wrapper">
        <div className="game-tile">
          <div className="game-title">{title}</div>
          <div className="game-platform">
            Platforms:
            <span>{platform}</span>
          </div>
          <div className="game-score">
            Score
            <span>{score}</span>
          </div>
          <div className="game-genre">
            Genre:
            {genre.split(",").map(item => (
              <span>{item.trim()}</span>
            ))}
          </div>
          <div className="game-editor-choice">
            {editors_choice === "Y" ? "Editor's Choice" : ""}
          </div>
          <div className="game-release-year">{release_year}</div>
        </div>
      </div>
    );
  }
}

export default GameTile;
