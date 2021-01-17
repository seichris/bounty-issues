import React from "react";
import Navbar from "../components/navbar"
import AllIssues from "../components/issues.json"

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
                 {/* still broken */}
                  <h1>{props.issue.title}</h1>
                  <h3>{props.issue.description}</h3>
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
