import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import StackedCard from "../components/StackedCard/StackedCard"
import Checkout from "../components/Checkout/Checkout"

function IndexPage() {
  let images = ["One", "Two"];
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

       {/*
        <img
          src={catAndHumanIllustration}
          className="block mx-auto w-1/2"
          alt="Cat and human sitting on a couch"
        /> 
       */}

       <StackedCard title="Help us do God's work!" ></StackedCard>
       <div className="text-center">
          <Checkout></Checkout>
          <p className="leading-snug text-2xl text-gray 700">
            Help support our mission in South Africa
          </p>
        </div>

        
    </Layout>
  );
}

export default IndexPage;
