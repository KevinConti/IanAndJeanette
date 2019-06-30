import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Checkout from '../components/Checkout/Checkout';
import image from '../images/iandj.jpg';
import css from '../css/style.css';

function IndexPage() {
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

      {/*Body*/}
      <section className="bg-gray-050">
        <div className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-2 md:p-8 w-full">
          <div className="md:max-w-lg lg:max-w-xl overflow-y-visible mx-auto pb-8  bg-gray-050">
            <div className="font-bold text-3xl px-6 pb-4">
              Help us do God's work!
            </div>
            <img
              className="w-11/12 mx-auto rounded"
              src={image}
              alt="Ian and Jeanette"
            />
          </div>
        </div>
        <svg
          className="h-4vh w-full -mt-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#E8E6E1" points="0,100 100,0 100,100" />
        </svg>
      </section>
      <section className="bg-gray-100">
        <div className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-2 md:p-8">
          <div className="text-center bg-gray-100 w-3/5 self-center">
            <p className="leading-snug text-2xl text-gray-700 mb-4">
              Help support our mission in South Africa
            </p>
            <Checkout></Checkout>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
