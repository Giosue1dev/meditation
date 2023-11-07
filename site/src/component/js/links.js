import React from "react";

function OpenLinks() {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="linkcontainer">
      <h3>Choose a Sound </h3>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=def8h9NCSL8")}
      >
        waterfalls
      </button>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=MjJMQuJ7eNo")}
      >
        Rain
      </button>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=h6Ez_5dd9Bc&t=17s")}
      >
        wind
      </button>
      <button
        className="linkbuttons"
        onClick={() => openLinkInNewTab("https://www.youtube.com/watch?v=I0oLjBDB2NQ")}
      >
        fire
      </button>
    </div>
  );
}

export default OpenLinks;