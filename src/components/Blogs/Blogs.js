import './sass/Blogs.css';
import React from 'react';
import { useState } from 'react'
import blogData from '../../Data/blogsData';
import {BlogsCard} from '../exports'
function Blogs() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <React.Fragment>
            <section className="blogs">
                <h1 className="title">our Blogs</h1>
                <input  type='text' className='blog-input' placeholder="search blogs..." onChange={(event) => {setSearchTerm(event.target.value)}}/>
                <div className="blogs-container">

                    <div className="blogs-nav-bar">
                                <h1>Featured Articles For Everyone</h1>
                                {/* <a href="/">The Most Important And Newest Residential Neighborhoods In The United States</a>
                                <a href="/">The Best Global Tourist Sites</a>
                                <a href="/">The Most Beautiful Apartments Around The World</a>
                                <a href="/">Cheap But Nice Apartments</a>
                                <a href="/">Religious Tourism In Mecca And The Best Hotels In Mecca</a>
                                <a href="/">Radi For Construction And Investment</a> */}

                                <a href='#blog-6'>Why Do Many People Prefer To Buy Lands Far From The City?</a>
                                <a href='#blog-6'>The Best Global Tourist Sites</a>
                                <a href='#blog-4'>Home Renovation: Will It Go Back To How It Was?</a>
                                <a href='#blog-3'>Tourist Places In Sudan</a>
                                <a href='#blog-2'>Religious Tourism In Mecca And The Best Hotels In Mecca</a>
                                <a href='#blog-1'>Buildings Depend On Solar Energy</a>
                    </div>

                    <div className="all-blogs">
                        {

                            blogData.filter((val) => {
                                if(searchTerm === ""){
                                    return val;
                                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                                }
                            }).map(exampleCard => {
                                return <BlogsCard {...exampleCard}
                                key={exampleCard.id}
                                />
                            })
                        }
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Blogs;