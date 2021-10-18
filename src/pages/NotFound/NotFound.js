import React from 'react';

const NotFound = () => {
    const img = 'https://vectorforfree.com/wp-content/uploads/2020/03/Error_404_VectroForFree.png';
    return (
        <div className="text-center">
            <img className="img-fluid" src={img} alt="404" />
        </div>
    );
};

export default NotFound;