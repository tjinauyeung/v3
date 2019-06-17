import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/profile";
import SEO from "../components/seo";
import { ChevronRight } from "../icons/chrevron-right";
import { ChevronLeft } from "../icons/chrevron-left";
import "./template.scss";

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

function Template({ data, pageContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <main className="template">
        <p className="template__date">{frontmatter.date}</p>
        <h1 className="template__title">{frontmatter.title}</h1>
        <div className="template__content" dangerouslySetInnerHTML={{ __html: html }} />
        <Profile className="template__profile" />
      </main>
      <div className="template__nav">
        {previous && <Prev to={previous.fields.slug} title={previous.frontmatter.title} />}
        {next && <Next to={next.fields.slug} title={next.frontmatter.title} />}
      </div>
    </Layout>
  );
}

const Prev = ({ to, title }) => (
  <Link className="template__link" to={to}>
    <ChevronLeft />
    <span>{title}</span>
  </Link>
);
const Next = ({ to, title }) => (
  <Link className="template__link template__link--next" to={to}>
    <span>{title}</span>
    <ChevronRight />
  </Link>
);

export default Template;
