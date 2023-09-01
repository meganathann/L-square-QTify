import React from "react";
import style from "./AutoSuggestion.module.css";
import AutoSuggestionCard from "../AutoSuggestionCard/AutoSuggestionCard";

const AutoSuggestion = ({ filteredAlbum }) => {
  return (
    <div className={style.autoSuggestionWrapper}>
      {filteredAlbum.map((album) => {
        return <AutoSuggestionCard {...album} key={album.id} />;
      })}
    </div>
  );
};

export default AutoSuggestion;