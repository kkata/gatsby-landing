import React from "react";
import Helmet from "react-helmet";

export default (props) => (
  <Helmet
    htmlAttributes={{
      lang: "ja",
    }}
    title={(props.title ? props.title + " | " : "") + "サイトタイトル"}
    meta={[
      {
        name: "description",
        content: props.description || "Gastbyサンプル",
      },
    ]}
  />
);
