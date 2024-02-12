import React from "react"

const FilterGroup = ({ minRating, onRatingclick, ratings }) => {
  return (
    <ul className=" align_center movie_filter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === `{rate}`
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRatingclick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  )
}

export default FilterGroup
