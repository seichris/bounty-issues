import React from "react";
import Navbar from "../components/navbar"
import issues from "../components/issues.json"

const Post = ({issue}) => {
  if (!issue) {
      // fix Next bug while building
      // "Error occurred prerendering page "/[...slug]". Read more: https://err.sh/next.js/prerender-error"
      // https://github.com/vercel/next.js/issues/12846
      return null;
    }
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
        <div className="flex flex-1">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col flex-1 max-w-5xl">
              <div className="flex flex-col flex-1 justify-between">
                 <div className="flex flex-col">
                  <h1>{issue.title}</h1>
                  <h3>{issue.description}</h3>
                  {/* gh action could convert .md to html. what about security?
                    <div dangerouslySetInnerHTML={{__html: issue.content}}></div>*/}
                  </div>
                  <div>
                     <div className="flex flex-row justify-center"><a href="https://canny.io/powered-by-canny" rel="noopener" target="_blank" className="text-gray-400 hover:text-gray-500 text-xs p-4">Inspired&nbsp;by&nbsp;Canny</a></div>
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

export async function getStaticPaths() {

  const paths = issues.issues.map(issue => {
    const slug = issue.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const issue = issues.issues.find(issue => issue.path === currentPath) || {notfound: true};
  return {props: {issue}};
}
