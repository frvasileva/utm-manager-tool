import React from "react";
import Layout from "../components/Layout/Layout";
import { Tabs, Tab } from "react-bootstrap";



const CreatePredefinedUtmValues = () => {
  return (
    <Layout>
      <h1>Predefined UTM terms</h1>

      <Tabs defaultActiveKey="campaignList" id="uncontrolled-tab-example">
        <Tab eventKey="campaignList" title="Campaign List">
        </Tab>
        <Tab eventKey="mediumList" title="Medium List">
        </Tab>
        <Tab eventKey="sourceLIst" title="Source List">
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default CreatePredefinedUtmValues;