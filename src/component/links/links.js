import React from "react";
import './links.css';

function OpenLinks() {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="linkcontainer">
      <h3>Choose a type of meditation </h3>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=4Zr2MRO7mbc")}
      >
        relax voice
      </button>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=ohrGV_sm9E4")}
      >
        breathing 
      </button>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=qsiCrGo8nO4")}
      >
       
       beginners
      </button>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=M5VOQ0CBmec")}
      >
        Fast
      </button>
    </div>
  );
}

export default OpenLinks;