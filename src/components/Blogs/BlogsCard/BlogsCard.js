import React from 'react'
import './sass/BlogsCard.css'
import Button from '../../button'

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
                <Button>read now</Button>
                <span>{props.views}</span>
            </div>
        </React.Fragment>
    )
}

export default BlogsCard