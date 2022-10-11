import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1, 
            title: 'What is the purpose of react router?', 
            body: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.'
        },
        {
            id: 2, 
            title: 'How does context API work?', 
            body: 'The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.'
        },
        {
            id: 3, 
            title: 'What is useref?', 
            body: "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. In React you want to use the useRef hook or if you're in a React class component, you want to use createRef. The reason you don't want to use getElementById or querySelector is because you may be designing your React app to output multiple of the same ID's, which is a no no."
        },
    ]
    return (
        <section className='p-10'>
            <h2 className='text-3xl font-semibold mb-10 text-center'>Blog</h2>
            {
                blogs.map(blog => <div key={blog.id} className='bg-gray-100 p-10 my-5' style={{borderLeft: "2px solid var(--second-color)"}}>
                    <h1 className='font-semibold text-3xl'>{blog.title}</h1>
                    <p className='text-gray-700 mt-4'>{blog.body}</p>
                </div>)
            }
        </section>
    );
};

export default Blog;