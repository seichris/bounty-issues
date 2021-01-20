import React from "react";

const Post = (props) => {
  return (
    <>
      <div className="publicContainer">
        <div className="publicNav">
          <div className="contentContainer">
            <div className="contentInnerContainer">
              <Navbar />
            </div>
          </div>
        </div>
        <div className="subdomainHome">
          <div className="contentContainer">
            <div className="contentInnerContainer">
              <div className="subdomainHomeContents">
                 <div className="topContainer">
                  {/*<h1>{props.post.title}</h1>
                  <h3>{props.post.description}</h3>*/}
                  </div>
                  <div className="bottomContainer">
                     <div className="cannyAttribution"><a href="https://canny.io/powered-by-canny" rel="noopener" target="_blank" className="attribution">Inspired&nbsp;by&nbsp;Canny</a></div>
                  </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </>
  );
};

export default Post;
