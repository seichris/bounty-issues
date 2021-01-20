import React from "react";
import Link from "next/link";

const Issues = (props) => {
  //creating an array of JSX for each post, using the map array method
  const issuesJSX = props.issues.map((issue, i) => (
      issue.state == "building" &&
            <div key={i} className="flex items-center mt-6">
             <div className="upvoteBox flex items-center flex-col w-10 h-12 cursor-pointer mr-4 pt-2 pb-2 bg-white border border-solid rounded border-gray-200 hover:border-gray-300">
                <div className="upvote"></div>
                <span className="text-center leading-5 text-sm select-none pt-1">5</span>
             </div>
             <Link href={`/${issue.slug}`}>
               <a className="postLink">
                  <div className="body">
                     <div className="font-semibold text-normal leading-5 break-words">{issue.title}</div>
                     { issue.category == "bug" ?
                     <div className="uppercase font-bold text-xs text-gray-400 mt-2">Bug Report</div>
                       : issue.category == "feature" ?
                       <div className="uppercase font-bold text-xs text-gray-400 mt-2">Feature Request</div>
                       : issue.category == "translation" ?
                       <div className="uppercase font-bold text-xs text-gray-400 mt-2">Translation</div>
                       : <div className="uppercase font-bold text-xs text-gray-400 mt-2">Other</div>
                     }
                  </div>
               </a>
             </Link>
            </div>

  ));

  return <div className="issues">{issuesJSX}</div>;
};

export default Issues;
