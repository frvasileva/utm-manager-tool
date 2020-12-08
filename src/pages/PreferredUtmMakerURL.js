import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

const PreferredUtmMakerURL = () => {
  const [fields, setFields] = useState({
    websiteUrl: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-8">
          <h1>Customize Your UTM Maker Instance</h1>
          <h5>
            Fill in the information below to properly set up the UTM Maker
            instance to best meet your needs.
          </h5>
          <form className="form-wrapper" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="url">Website Url</label>
              <input
                type="text"
                className="form-control"
                id="websiteUrl"
                name="websiteUrl"
                aria-describedby="urlHelp"
                placeholder="Enter website url"
                onChange={handleInputChange}
                valuue={fields.websiteUrl}
              />
              <small id="urlHelp" className="form-text text-muted">
                The full website URL (e.g. https://www.example.com)
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="campaignName">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handleInputChange}
                valuue={fields.description}
                placeholder="Enter description"
              />
              <small id="urlHelp" className="form-text text-muted">
                Enter description
              </small>
            </div>

            <button type="submit" className="btn btn-dark btn-lg">
              CREATE URL
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PreferredUtmMakerURL;
