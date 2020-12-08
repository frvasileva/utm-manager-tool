import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "./createUtm.scss";

const CreateUtm = () => {
  const [fields, setFields] = useState({
    url: "",
    campaignName: "",
    sourceName: "",
    mediumName: "",
    term: "",
    content: "",
  });

  var [utmUrl, setUtmUrl] = useState("");

  const handleInputChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    
    event.preventDefault();
    
    utmUrl =  fields.url + "?" 
      + (fields.sourceName !== "" ? "utm_source=" + fields.sourceName : "") 
      + (fields.mediumName !== "" ? "&utm_medium=" + fields.mediumName : "")
      + (fields.campaignName !== "" ? "&utm_campaign=" + fields.campaignName : "")
      + (fields.term !== "" ? "&utm_term=" + fields.term : "")
      + (fields.content !== "" ? "&utm_content=" + fields.content : "")

    setUtmUrl(utmUrl);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-8">
          <h1>Create Utm form</h1>
          <form className="form-wrapper" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input
                type="text"
                className="form-control"
                id="url"
                name="url"
                aria-describedby="urlHelp"
                placeholder="Enter url"
                onChange={handleInputChange}
                valuue={fields.url}
              />
              <small id="urlHelp" className="form-text text-muted">
                The full website URL (e.g. https://www.example.com)
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="campaignName">Campaign Name</label>
              <input
                type="text"
                className="form-control"
                id="campaignName"
                name="campaignName"
                onChange={handleInputChange}
                valuue={fields.campaignName}
                placeholder="Enter campaign name"
              />
              <small id="urlHelp" className="form-text text-muted">
                The referrer: (e.g. google, newsletter)
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="sourceName">Source Name</label>
              <input
                type="text"
                className="form-control"
                id="sourceName"
                name="sourceName"
                onChange={handleInputChange}
                valuue={fields.sourceName}
                placeholder="Enter source name"
              />
              <small id="urlHelp" className="form-text text-muted">
                The referrer: (e.g. google, newsletter)
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="mediumName">Medium Name</label>
              <input
                type="text"
                className="form-control"
                id="mediumName"
                name="mediumName"
                onChange={handleInputChange}
                valuue={fields.mediumName}
                placeholder="Enter medium name"
              />
              <small id="urlHelp" className="form-text text-muted">
                Marketing medium: (e.g. cpc, banner, email)
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="term">Term</label>
              <input
                type="text"
                className="form-control"
                id="term"
                name="term"
                onChange={handleInputChange}
                valuue={fields.term}
                placeholder="Enter term"
              />
              <small id="urlHelp" className="form-text text-muted">
                Identify the paid keywords
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                onChange={handleInputChange}
                valuue={fields.content}
                placeholder="Enter content"
              />
              <small id="urlHelp" className="form-text text-muted">
                Use to differentiate ads
              </small>
            </div>

            <button type="submit" className="btn btn-dark btn-lg">
              CREATE URL
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          {utmUrl !== "" && (
            <div className="utm-result-wrapper">
              <h4>URL:</h4>
              <textarea
                id="utmUrl"
                name="utmUrl"
                rows="4"
                cols="70"
                className="form-control"
                defaultValue={utmUrl}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CreateUtm;
