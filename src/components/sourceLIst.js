import React from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015

const SourceList = () => {
  return (
    <>
      <Typeahead id="sourceList"
        onChange={(selected) => {
          // Handle selections...
        }}
        options={[
          "food-campaign",
          "facebook-campaign",
          "twitter-campaign",
          "linkedin-campaign",
        ]}
      />
    </>
  );
};

export default SourceList;
