import React from "react";

function Trending(){
  const trendingStyle = {
    padding: '5px',
    textAlign: 'center'
  }

  return(
    <React.Fragment>
      <div class="card" style={trendingStyle}>
        <p><em>#Trending Content</em></p>
        <p><em>#Trending Content</em></p>
        <p><em>#Trending Content</em></p>
        <p><em>#Trending Content</em></p>
        <p><em>#Trending Content</em></p>
        <p><em>#Trending Content</em></p>
      </div>
    </React.Fragment>
  );
}

export default Trending;