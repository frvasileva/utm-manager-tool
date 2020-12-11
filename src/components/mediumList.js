import React from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015

const MediumList = () => {
  return (
    <>
      <Typeahead
        id="mediumList"
        onChange={(selected) => {
          // Handle selections...
        }}
        options={["google", "facebook", "twitter", "linkedin"]}
      />
    </>
  );
};

export default MediumList;
