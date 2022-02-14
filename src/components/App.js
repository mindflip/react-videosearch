import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("basketball");

  useEffect(() => {
    setSelectedVideo(videos[0]);
    console.log(videos);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
    </div>
  );
};

export default App;
