import React from 'react'
import './sass/BlogsCard.css'

function BlogsCard(props) {
    return (
        <React.Fragment>
            <div className='blog-card' key={props.id}>
                <img src={props.image} alt={props.alt}/>
                <h2 className='blog-title'>{props.title}</h2>
                <p>{props.blogText1}</p>
                {/* <p>{props.blogText2}</p>
                <p>{props.blogText3}</p>
                <p>{props.blogText4}</p>
                <p>{props.blogText5}</p> */}
                <a href={"#"+props.alt} className='btn'>read now<span>&#10230;</span></a>
                <span>{props.views}</span>
            </div>
        </React.Fragment>
    )
}

export default BlogsCard