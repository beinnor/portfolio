import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Landing from '../components/landing/landing';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import Contact from '../components/contact/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
