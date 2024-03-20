import React from 'react';
import AboutArea from '../../components/About/AboutArea';
import BgShape from '../../components/common/BgShape';
import BrandArea from '../../components/Home/BrandArea';
import Testimonial from '../../components/Home/Testimonial';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'

const About = ({ frontmatter, markdown, testimonials }) => {
   return (
      <>
         <SEO pageTitle={'About'} />
         <BgShape />
         <AboutArea frontmatter={frontmatter} markdown={markdown} />
         <BrandArea spacing="pb-65 pt-80" />
         <Testimonial testimonials={testimonials} />
      </>
   );
};

export default About;

export async function getStaticProps() {
   const file = fs.readFileSync('./content/about/about.md', 'utf8')
   const testimonials = matter(fs.readFileSync('./content/testimonials/index.md', 'utf8')).data.testimonialData
   const matterData = matter(file)
   let frontmatter = matterData.data
   const markdown = matterData.content

   return {
      props: { frontmatter, markdown, testimonials }
   }
}