import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar"

import Post from "../components/Post"
import IssuesProposed from "../components/IssuesProposed"
import IssuesFunding from "../components/IssuesFunding"
import IssuesBuilding from "../components/IssuesBuilding"
import AllIssues from "../components/issues.json"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Request and fund features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                  {/*<div className="boardGridContainer">
                     <div className="header">Give Feedback</div>
                     <div className="boardGrid">
                        <a className="boardGridItem" href="/feature-requests">
                           <div className="top">
                              <div className="name">Feature request</div>
                              <div className="uppercaseHeader posts">428</div>
                           </div>
                        </a>
                        <a className="boardGridItem" href="/bugs">
                           <div className="top">
                              <div className="name">Bug report</div>
                              <div className="uppercaseHeader posts">65</div>
                           </div>
                        </a>
                        <a className="boardGridItem" href="/languages">
                           <div className="top">
                              <div className="name">Translation</div>
                              <div className="uppercaseHeader posts">10</div>
                           </div>
                        </a>
                        <a className="boardGridItem" href="/integrations">
                           <div className="top">
                              <div className="name">Integration</div>
                              <div className="uppercaseHeader posts">44</div>
                           </div>
                        </a>
                     </div>
                  </div>*/}
                  <div className="roadmapView">
                     <div className="header">Roadmap</div>
                     <div className="roadmapColumns">
                     <div className="roadmapColumn">
                       <a href="/proposed">
                          <div className="columnHeader">
                             <div className="dot underReview"></div>
                             <div>Proposed Features</div>
                          </div>
                        </a>
                        <div className="scrollContainer scrollable">
                           <div className="postList">
                              <div className="topContainer"></div>
                              <div className="posts">
                                 <IssuesProposed issues={AllIssues}/>
                               </div>
                             </div>
                           <div className="roadmapLoadMore"></div>
                         </div>
                       </div>



                        <div className="roadmapColumn">
                          <a href="/funding">
                             <div className="columnHeader">
                                <div className="dot planned"></div>
                                <div>Features in Funding</div>
                             </div>
                           </a>
                           <div className="scrollContainer scrollable">
                              <div className="postList">
                                 <div className="topContainer"></div>
                                 <div className="posts">
                                   <IssuesFunding issues={AllIssues}/>
                                 </div>
                              </div>
                              <div className="roadmapLoadMore"></div>
                           </div>
                        </div>
                        <div className="roadmapColumn">
                          <a href="/building">
                             <div className="columnHeader">
                                <div className="dot inProgress"></div>
                                <div>In Progress</div>
                             </div>
                           </a>
                           <div className="scrollContainer scrollable">
                              <div className="postList">
                                 <div className="topContainer"></div>
                                 <div className="posts">
                                   <IssuesBuilding issues={AllIssues}/>
                                 </div>
                              </div>
                              <div className="roadmapLoadMore"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bottomContainer">
                <div className="cannyAttribution"><a href="https://github.com/seichris/issues-to-website/issues" rel="noopener" target="_blank" className="attribution">Add issues at https://github.com/seichris/bounty-issues</a></div>
                <div className="cannyAttribution"><a href="https://canny.io/powered-by-canny" rel="noopener" target="_blank" className="attribution">Inspired&nbsp;by&nbsp;Canny</a></div>
               </div>
            </div>
          </div>
          </div>
          </div>
      </div>


    </div>
  )
}
