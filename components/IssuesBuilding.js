import React from "react";
import Link from "next/link";

const Issues = (props) => {
  //creating an array of JSX for each post, using the map array method
  const issuesJSX = props.issues.map((issue, i) => (
      issue.state == "building" &&
            <div key={i} className="postListItem">
             <div className="postVotes">
                <div className="upvote"></div>
                <span>5</span>
             </div>
             <Link href={`/${issue.slug}`}>
               <a className="postLink">
                  <div className="body">
                     <div className="postTitle"><span>{issue.title}</span></div>
                     { issue.category == "bug" ?
                     <div className="uppercaseHeader boardName">Bug Report</div>
                       : issue.category == "feature" ?
                       <div className="uppercaseHeader boardName">Feature Request</div>
                       : issue.category == "translation" ?
                       <div className="uppercaseHeader boardName">Translation</div>
                       : <div className="uppercaseHeader boardName">Other</div>
                     }
                  </div>
               </a>
             </Link>
            </div>

  ));

  return <div className="issues">{issuesJSX}</div>;
};

export default Issues;
