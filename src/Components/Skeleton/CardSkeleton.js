import React from 'react'
import Skeleton from './Skeleton';
import './skeleton.css';
import Shimmer from './Shimmer';
const CardSkeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <Skeleton type="img"/>
            <Skeleton type="title"/>
            <Skeleton type="text"/>
            <Skeleton type="text"/>
            <Shimmer/>
        </div>
    )
}

export default CardSkeleton
