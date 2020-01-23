import React from 'react';
import { SEO, Layout } from '../components/common';
import { NavMenu } from '../components/NavMenu';
import { Landing, About, Portfolio, Contact } from '../components/sections';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Portfolio />
    <Contact />
    <NavMenu />
  </Layout>
);

export default IndexPage;
