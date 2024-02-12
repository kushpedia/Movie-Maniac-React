import React from 'react'
import './MovieCard.css'
import Star from '../../assets/star.png'

const MovieCard = ({movie}) => {
	return (
		
		<a href={`https://themoviedb.org/movie/${movie.id}`} className='movie_card' target='_blank'>
			<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
			alt="Movie poster" className='movie_poster' />

			<div className="movie_details">
				<h3 className='movie_details_heading'>{movie.original_title}</h3>
				<div className="align_center movie_data_rate">
					<p>{movie.release_date}</p> 
					<p>{movie.vote_average} </p>
						<img src={Star} alt="rating icon"  className='card_emoji'/>
					
				</div>
				<p className="movie_description">
					{movie.overview.slice(0,100) + "..."}
				</p>
			</div>
			</a>
	)
}

export default MovieCard