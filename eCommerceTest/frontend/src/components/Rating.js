import React from 'react'

export default function Rating(props) {
    const {rating, numReviews} = props;
    return (
        <div className="rating">
            {/* 
                Fill the start if find '1'. 
                Fill half start if greater tha 0.5. 
                Otherwise, is less than 0.5, which got an empty star 
            */}
            <span>
                <i className={   
                    rating >= 1
                        ? 'fa fa-star'
                        : rating >= 0.5
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'} 
                        >
                </i>
            </span>
            <span>
                <i className={   
                    rating >= 2
                        ? 'fa fa-star'
                        : rating >= 1.5
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'} 
                        >
                </i>
            </span>
            <span>
                <i className={   
                    rating >= 3
                        ? 'fa fa-star'
                        : rating >= 2.5
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'} 
                        >
                </i>
            </span>
            <span>
                <i className={   
                    rating >= 4
                        ? 'fa fa-star'
                        : rating >= 3.5
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'} 
                        >
                </i>
            </span>
            <span>
                <i className={   
                    rating >= 5
                        ? 'fa fa-star'
                        : rating >= 4.5
                        ? 'fa fa-star-half-o'
                        : 'fa fa-star-o'} 
                        >
                </i>
            </span>

            <span>
                {numReviews + ' reviews'}
            </span>
        </div>
    )
}
