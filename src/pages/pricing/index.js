import React from 'react';
import BgShape from '../../components/common/BgShape';
import PricingArea from '../../components/Pricing/PricingArea';
import SEO from '../../components/seo';
import fs from 'fs'
import matter from 'gray-matter'

const Pricing = ({ plans }) => {
    return (
        <>
            <SEO pageTitle={'Pricing'} />
            <BgShape />
            <PricingArea plans={plans} />
        </>
    );
};

export default Pricing;

export async function getStaticProps() {
    const plans = matter(fs.readFileSync('./content/plans/index.md', 'utf8')).data.plans

    return {
        props: { plans }
    }
}