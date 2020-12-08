import React from "react";
import Layout from "../components/Layout/Layout";
const createUtm = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-8">
          <h1>Create Utm form</h1>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Url</label>
              <input
                type="text"
                className="form-control"
                id="urlField"
                aria-describedby="urlHelp"
                placeholder="Enter url"
              />
              <small id="urlHelp" className="form-text text-muted">
                Put url you want to share
              </small>
            </div>
            <div className="form-group">
              <label for="campaignNameField">Campaign Name</label>
              <input
                type="text"
                className="form-control"
                id="campaignNameField"
                placeholder="Enter campaign name"
              />
            </div>
            <div className="form-group">
              <label for="sourceNameField">Source Name</label>
              <input
                type="text"
                className="form-control"
                id="sourceNameField"
                placeholder="Enter source name"
              />
            </div>
            <div className="form-group">
              <label for="mediumNameField">Medium Name</label>
              <input
                type="text"
                className="form-control"
                id="mediumNameField"
                placeholder="Enter medium name"
              />
            </div>
            <div className="form-group">
              <label for="termField">Term</label>
              <input
                type="text"
                className="form-control"
                id="termField"
                placeholder="Enter term"
              />
            </div>
            <div className="form-group">
              <label for="contentField">Content</label>
              <input
                type="text"
                className="form-control"
                id="contentField"
                placeholder="Enter content"
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg">
              Create Url
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default createUtm;
