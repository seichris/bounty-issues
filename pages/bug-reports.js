import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar"
import AllIssues from "../components/issues.json"

function BugReports() {

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
        <div className="boardHome">
           <div className="contentContainer">
              <div className="contentInnerContainer">
                 <div className="subdomainSidebarContainer">
                    <div className="mainContainer">
                       <div className="postListContainer">
                          <div className="postList">
                             <div className="topContainer">
                                <div className="postListMenu">
                                   <div className="menu">
                                      <div className="text">List of all Bug Reports</div>
                                   </div>
                                   <div className="searchContainer">
                                      <div className="searchBar">
                                         <div className="textInput searchInput">
                                            <div className="inset">
                                               <div className="icon icon-search"></div>
                                            </div>
                                            <div className="inputContainer"><input type="text" placeholder="Search…"/></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div className="posts">
                               {AllIssues.issues.map((blog, i) => (
                                 blog.category == "bug" &&
                                  <div className="postListItem">
                                    <div className="postVotes">
                                       <div className="upvote"></div>
                                       <span>886</span>
                                    </div>
                                    <Link href={`/${blog.slug}`}>
                                    <a key={i} className="postLink">
                                       <div className="body">
                                          <div className="postTitle"><span>{blog.title}</span></div>
                                          <div className="statusStale">
                                            { blog.state == "proposed" ?
                                            <div className="uppercaseHeader postStatus planned">Proposed</div>
                                              : blog.state == "funding" ?
                                              <div className="uppercaseHeader postStatus planned">In Funding</div>
                                              : blog.state == "building" ?
                                              <div className="uppercaseHeader postStatus planned">In Progress</div>
                                              : <div className="uppercaseHeader postStatus planned">Other</div>
                                            }

                                          </div>
                                          {/* left of here */}
                                          <div className="text-sm leading-5 break-words overflow-hidden max-h-11 mt-2">
                                             <div className="overflow-ellipsis">
                                                <div className="">{blog.description}</div>
                                             </div>
                                          </div>
                                       </div>
                                       <a href={blog.url} target="_blank" rel="noopener">
                                        <div className="postCommentCount"><span className="icon icon-comment"></span><span>66</span></div>
                                      </a>
                                    </a>
                                  </Link>
                                 </div>
                               ))}



                             </div>
                             <div className="flex justify-between items-center text-base cursor-pointer text-indigo-600 select-none">
                                → Load More
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default BugReports;
