import React from 'react';

const Heading = ({subTitle,title}) => {
    return (
            <div className="text-center my-32">
                <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">{subTitle}</p>
                <h1 className="text-gray-900 mb-6">
                    {title}
                </h1>
            </div>
    );
};

export default Heading;