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
        <div className={"antialiased flex flex-col font-sans min-h-screen text-gray-900"}>
          
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="">
            {children}
          </div>

          <footer className="bg-red-400 mt-auto">
            <div className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Created by{" "}
                <a
                  href="https://kevinconti.com"
                  className="font-bold no-underline text-white"
                >
                  Kevin Conti
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
