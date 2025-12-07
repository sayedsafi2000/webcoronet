import React from 'react';
import Heading from '../components/heading/heading';

const page = () => {
    return (
        <div className='mt-28'>
            <Heading subTitle="Latest Insights & Updates" title="Our Blog" />
            <div className='my-16 text-center'>
                <p className='text-lg text-gray-600 mb-8'>
                    Stay tuned for the latest articles, tips, and insights about web development, design trends, digital marketing, and technology.
                </p>
                <p className='text-gray-500'>
                    New blog posts coming soon!
                </p>
            </div>
        </div>
    );
};

export default page;