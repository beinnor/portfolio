import React from 'react';
import { SEO, Layout } from '../components/common';
import { Landing, About, Portfolio, Contact } from '../components/sections';

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
