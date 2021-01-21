import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar"
import AllIssues from "../components/issues.json"

function FeatureRequest() {

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-full">
        <div className="w-full border border-b border-solid border-gray-200 mb-8">
          <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-5xl">
              <Navbar />
            </div>
          </div>
        </div>
        <div>
           <div className="flex flex-col items-center w-full">
              <div className="w-full max-w-4xl">
                 <div className="flex flex-row self-start">
                    <div className="flex flex-col flex-1">
                       <div className="overflow-visible">
                          <div className="flex flex-col">
                             <div>
                                <div className="flex flex-row flex-1 justify-between items-center">
                                   <div className="flex-1 pr-10 pt-6 pb-6">
                                      <div className="text-lg leading-5 cursor-default">List of all Bug Reports</div>
                                   </div>
                                   <div className="flex flex-1 my-3 items-center border border-solid rounded border-gray-200 hover:border-gray-300">
                                      <div className="flex-1">
                                         <div className="flex flex-row flex-1 items-center px-3 py-2">
                                            <div className="w-10">
                                            <svg className="mr-2" width="14" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                              <path d="M18.9999 19L14.6499 14.65" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            </div>
                                            <div className="flex flex-row flex-1 items-center"><input className="w-16 text-base cursor-text" type="text" placeholder="Search…"/></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div>
                               {AllIssues.issues.map((issue, i) => (
                                 issue.category == "feature" &&
                                  <div className="flex items-center mt-6 mb-4">
                                    <div className="upvoteBox self-start flex items-center flex-col w-10 h-12 cursor-pointer mr-4 pt-2 pb-2 bg-white border border-solid rounded border-gray-200 hover:border-gray-300">
                                       <div className="upvote"></div>
                                       <span className="text-center leading-5 text-sm select-none pt-1">886</span>
                                    </div>
                                    <Link href={`/${issue.slug}`}>
                                    <a key={i} className="flex flex-row items-start justify-between cursor-pointer box-border flex-1 pr-4">
                                       <div className="relative flex flex-col">
                                          <div className="font-semibold text-normal leading-5 break-words">{issue.title}</div>
                                          <div>
                                            { issue.state == "proposed" ?
                                            <div className="uppercase font-medium text-xs text-blue-500 mt-2 tracking-wider">Proposed</div>
                                              : issue.state == "funding" ?
                                              <div className="uppercase font-medium text-xs text-blue-500 mt-2 tracking-wider">In Funding</div>
                                              : issue.state == "building" ?
                                              <div className="uppercase font-medium text-xs text-blue-500 mt-2 tracking-wider">In Progress</div>
                                              : <div className="uppercase font-medium text-xs text-blue-500 mt-2 tracking-wider">Other</div>
                                            }

                                          </div>
                                          <div className="text-sm leading-5 break-words overflow-hidden max-h-11 mt-2">
                                             <div className="overflow-ellipsis">
                                                <div className="line">{issue.description}</div>
                                             </div>
                                          </div>
                                       </div>
                                       <a href={issue.url} target="_blank" rel="noopener">
                                        <div className="leading-5 flex items-center p-1 box-border">
                                          <svg className="mr-2" width="14" height="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19 13.3686C19 13.8991 18.7893 14.4078 18.4142 14.7829C18.0391 15.1579 17.5304 15.3686 17 15.3686H5L1 19.3686V3.36864C1 2.8382 1.21071 2.3295 1.58579 1.95442C1.96086 1.57935 2.46957 1.36864 3 1.36864H17C17.5304 1.36864 18.0391 1.57935 18.4142 1.95442C18.7893 2.3295 19 2.8382 19 3.36864V13.3686Z" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                        <span className="text-sm">66</span></div>
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

export default FeatureRequest;
