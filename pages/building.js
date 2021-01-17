import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar"
import AllIssues from "../components/issues.json"

function Building() {

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
                                      <div className="text">Issues which are being solved right now</div>
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
                               {AllIssues.map((blog, i) => (
                                 blog.state == "building" &&
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
                                             <div className="uppercaseHeader postStatus planned">{blog.category} Request</div>
                                          </div>
                                          <div className="postDetails">
                                             <div className="truncate">
                                                <div className="line">{blog.description}</div>
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
                             <div className="postListLoadMore">
                                Load More
                                <div className="arrow">→</div>
                             </div>
                          </div>
                       </div>
                       <div className="cannyAttribution mobileOnly"><a href="https://canny.io/powered-by-canny?utm_source=feedback_subdomain&amp;utm_medium=powered&amp;utm_campaign=raindropio&amp;company=Raindrop.io" rel="noopener" target="_blank" className="attribution">Powered&nbsp;by&nbsp;Canny</a></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Building;
