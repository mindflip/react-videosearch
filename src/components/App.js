import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";

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
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">list</div>
        </div>
      </div>
    </div>
  );
};

export default App;
