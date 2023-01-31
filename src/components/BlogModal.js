import React from 'react';
const BlogModal = ({ modal }) => {
    return (
        <div>
            <input type="checkbox" id="modal-blog" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">{modal.headline}</h3>
                    <p className="py-4 font-semibold text-black">{modal.question}</p>
                    <p className="py-4">{modal.answer}</p>
                    <div className="modal-action">
                        <label
                            htmlFor="modal-blog"
                            className='bg-orange-500 rounded-full py-1 px-2 flex-1 text-white font-bold cursor-pointer text-center'
                        >
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;