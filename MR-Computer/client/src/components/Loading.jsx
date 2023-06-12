import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <h2 className=' text-3xl my-1'>Loading...</h2>
            <progress className="progress progress-secondary bg-pink-300 w-56 "></progress>
        </div>
    );
};

export default Loading;