import React from "react";

const TopRated = () => {
    const activeClass = "text-white  bg-green-600 border-white";
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
                >
                    Last Date
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    HTML & CSS
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    JS
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    React
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    Redux
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10 px-5'>
                <h1>This is TopRated page</h1>
            </div>
        </div>
  );
};

export default TopRated;