import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/profile";
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
    <Layout hideFooter>
      <main className="template">
        <p className="template__date">{frontmatter.date}</p>
        <h1 className="template__title">{frontmatter.title}</h1>
        <div className="template__content" dangerouslySetInnerHTML={{ __html: html }} />
        <Profile className="template__profile" />
      </main>
      <div className="template__nav">
        {next && <Prev to={next.fields.slug} title={next.frontmatter.title} />}
        {previous && <Next to={previous.fields.slug} title={previous.frontmatter.title} />}
      </div>
    </Layout>
  );
}

const Prev = ({ to, title }) => (
  <Link className="template__link" to={to}>
    <ChevronLeft />
    {title}
  </Link>
);
const Next = ({ to, title }) => (
  <Link className="template__link template__link--next" to={to}>
    {title}
    <ChevronRight />
  </Link>
);

export default Template;
