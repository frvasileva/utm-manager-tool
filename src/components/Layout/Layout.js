import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./Layout.scss";
import Menu from "./Menu";

const Layout = ({ children }) => (
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
    render={(data) => (
      <>
        <Menu />
        <div className="layoyt-wraper">
          <div className="container">
            <div className="row">
              <div className="col-md">
                {children}
                {data.site.title}
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

export default Layout;
