import React from 'react'

export default (props) => {
    const post = props.element 
    return (
        <div className="shadow bg-white mr-4 rounded" style={{ width:"275px" }}>
            <header className=" h-40 bg-cover bg-center" style={{backgroundImage:`url(${post.thumbnail})` }}></header>
            <div className="p-8">
                <h4 className="font-bold h-32 overflow-y-hidden">
                    {post.title}
                </h4>
                <div className="text-center mt-4">
                    <a  className="btn" href={post.link} target="_blank" rel="noopener noreferrer">Leer</a>
                </div>
            </div>
        </div>
    )
}