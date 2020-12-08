import React from "react";
import Layout from "../components/Layout/Layout";
import "./createUtm.scss";

const UtmList = () => {
  const utmsList = [
    {
      campaignName: "campaign",
      content: "content",
      mediumName: "medium",
      sourceName: "source",
      term: "term",
      url: "https://www.ft123.com/",
    },
    {
      campaignName: "campaign",
      content: "content",
      mediumName: "medium",
      sourceName: "source",
      term: "term",
      url: "https://www.ft456.com/",
    },
    {
      campaignName: "campaign",
      content: "content",
      mediumName: "medium",
      sourceName: "source",
      term: "term",
      url: "https://www.ft789.com/",
    },
  ];

  return (
    <Layout>
      <div className="row">
        <div className="col-8">
          <h1>UTM List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Url</th>
                <th scope="col">Campaign Name</th>
                <th scope="col">Content</th>
                <th scope="col">Medium</th>
                <th scope="col">Source</th>
                <th scope="col">Term</th>
              </tr>
            </thead>
            <tbody>
              {utmsList.map((item, index) => {
                return (
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.url}</td>
                    <td>{item.campaignName}</td>
                    <td>{item.content}</td>
                    <td>{item.mediumName}</td>
                    <td>{item.sourceName}</td>
                    <td>{item.term}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UtmList;
