import React from 'react';

const Heading = ({subTitle,title}) => {
    return (
            <div className="text-center my-16 md:my-24 lg:my-32">
                <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-3 md:mb-4">{subTitle}</p>
                <h1 className="text-gray-900 mb-4 md:mb-6">
                    {title}
                </h1>
            </div>
    );
};

export default Heading;