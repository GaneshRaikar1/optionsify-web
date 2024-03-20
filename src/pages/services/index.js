import React from 'react';
import SEO from '../../components/seo';
import BgShape from '../../components/common/BgShape';
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Blog.module.css'
import FaqArea from '../../components/services/FaqArea';
import Services from '../../components/services/Services';

const Strategies = ({ markdown, services }) => {

  return (
    <>
      <SEO pageTitle={'Services'} />
      <BgShape />
      <Services services={services} />
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
      <FaqArea />
    </>
  );
};

export default Strategies;

export async function getStaticProps() {
  const file = fs.readFileSync('./content/strategies/strategies.md', 'utf8')
  const services = matter(fs.readFileSync('./content/services/index.md', 'utf8')).data.services
  const matterData = matter(file)
  const markdown = matterData.content

  return {
    props: { markdown, services }
  }
}