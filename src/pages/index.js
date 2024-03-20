import fs from 'fs'
import matter from 'gray-matter'
import SEO from '../components/seo';
// import HeroArea1 from '../components/Home/HeroArea';
import HeroArea2 from '../components/homeTwo/HeroArea';
// import PricingArea from '../components/Pricing/PricingArea';
import FeaturesArea from '../components/homeTwo/FeaturesArea';
import Services from '../components/homeTwo/Services';
import HeroArea from '../components/homeTwo/HeroArea';
import Subscribe from '../components/Home/Subscribe';
import FeaturedItem from '../components/HomeThree/FeaturedItem';

export default function Home({ plans, features }) {

  return (
    <>
      <SEO pageTitle={'Home'} />
      {/* <HeroArea1 />
      <FeaturesArea features={features} />
      <HeroArea2 /> */}
      <HeroArea />
      <FeaturedItem />
      <Services />
      <Subscribe />
    </>
  )
}

export async function getStaticProps() {
  const plans = matter(fs.readFileSync('./content/plans/index.md', 'utf8')).data.plans
  const features = matter(fs.readFileSync('./content/featuresHome/index.md', 'utf8')).data.features

  return {
    props: { plans, features }
  }
}
