import React from 'react';

const Blog = () => {
    const blogs = [
        {id: 1, title: 'title', body: 'body'},
        {id: 1, title: 'title', body: 'body'},
        {id: 1, title: 'title', body: 'body'},
    ]
    return (
        <section className='p-10'>
            <h2 className='text-3xl font-semibold mb-10 text-center'>Blog</h2>
            {
                blogs.map(blog => <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                </div>)
            }
        </section>
    );
};

export default Blog;