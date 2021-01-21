import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar"
//import Post from "../components/Post"
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

      <div className="flex flex-col min-h-screen min-w-full">
        <div className="w-full border border-b border-solid border-gray-200 mb-8">
          <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-5xl">
              <Navbar />
            </div>
          </div>
        </div>
          <div className="flex flex-1">
          <div className="flex flex-col items-center w-full">
          <div className="flex flex-col flex-1 w-full max-w-5xl">
            <div className="flex flex-col flex-1 justify-between">
               <div className="flex flex-col flex-1">
                  <div className="flex flex-col flex-1 ">
                     <div className="text-gray-400 font-semibold mt-5 mr-0 mb-3 ml-4">Roadmap</div>
                     <div className="justify-between items-start flex-1 flex">

                    {/* should circle through all issues.json */}

                     <div className="relative min-h-full w-1/3 overflow-hidden rounded-md box-border mx-1">
                       <a href="/proposed">
                          <div className="flex items-center absolute top-0 left-0 right-0 font-semibold p-4 bg-gray-100 box-border rounded z-10">
                             <div className="bg-gray-500 w-2 h-2 mr-2 rounded-full"></div>
                             <div>Proposed Features</div>
                          </div>
                        </a>
                        <div className="shadow-inner pb-7 px-4 pt-4 absolute w-full max-h-full overflow-y-auto mt-4 bg-gray-100 rounded-md box-border">
                           <div className="flex flex-col">
                              <div className="flex flex-col flex-1"></div>
                                <div>
                                 <IssuesProposed issues={AllIssues.issues}/>
                               </div>
                             </div>
                           <div className="loadMore"></div>
                         </div>
                       </div>



                        <div className="relative min-h-full w-1/3 overflow-hidden rounded-md box-border mx-1">
                          <a href="/funding">
                             <div className="flex items-center absolute top-0 left-0 right-0 font-semibold p-4 bg-gray-100 box-border rounded z-10">
                                <div className="bg-blue-500 w-2 h-2 mr-2 rounded-full"></div>
                                <div>Features in Funding</div>
                             </div>
                           </a>
                           <div className="shadow-inner pb-7 px-4 pt-4 absolute w-full max-h-full overflow-y-auto mt-4 bg-gray-100 rounded-md box-border">
                              <div className="flex flex-col">
                                 <div className="flex flex-col flex-1"></div>
                                  <div>
                                   <IssuesFunding issues={AllIssues.issues}/>
                                 </div>
                              </div>
                              <div className="loadMore"></div>
                           </div>
                        </div>
                        <div className="relative min-h-full w-1/3 overflow-hidden rounded-md box-border mx-1">
                          <a href="/building">
                             <div className="flex items-center absolute top-0 left-0 right-0 font-semibold p-4 bg-gray-100 box-border rounded z-10">
                                <div className="bg-purple-400 w-2 h-2 mr-2 rounded-full"></div>
                                <div>In Progress</div>
                             </div>
                           </a>
                           <div className="shadow-inner pb-7 px-4 pt-4 absolute w-full max-h-full overflow-y-auto mt-4 bg-gray-100 rounded-md box-border">
                              <div className="flex flex-col">
                                 <div className="flex flex-col flex-1"></div>
                                 <div>
                                   <IssuesBuilding issues={AllIssues.issues}/>
                                 </div>
                              </div>
                              <div className="loadMore"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                <div className="flex flex-row justify-center"><a href="https://github.com/seichris/bounty-issues" rel="noopener" target="_blank" className="text-gray-400 hover:text-gray-500 text-xs p-4">Add issues at https://github.com/seichris/bounty-issues</a></div>
                <div className="flex flex-row justify-center"><a href="https://canny.io/powered-by-canny" rel="noopener" target="_blank" className="text-gray-400 hover:text-gray-500 text-xs p-4">Inspired&nbsp;by&nbsp;Canny</a></div>
               </div>
            </div>
          </div>
          </div>
          </div>
      </div>


    </div>
  )
}
