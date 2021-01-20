import React from "react";
import Navbar from "../components/navbar"
import issues from "../components/issues.json"

const Post = ({issue}) => {

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
                  <h1>{issue.title}</h1>
                  <h3>{issue.description}</h3>
                  {/* gh action could convert .md to html. what about security?
                    <div dangerouslySetInnerHTML={{__html: issue.content}}></div>*/}
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
