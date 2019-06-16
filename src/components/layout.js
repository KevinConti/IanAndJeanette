import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          <footer className="bg-blue-500">
            <div className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Created by{" "}
                <a
                  href="https://taylorbryant.blog"
                  className="font-bold no-underline text-white"
                >
                  Kevin Conti
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/kevinconti/gatsby-starter-tailwind"
                  className="font-bold no-underline text-white"
                >
                  GitHub
                </a>
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
