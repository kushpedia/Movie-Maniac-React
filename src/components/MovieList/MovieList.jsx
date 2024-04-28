import React, { useEffect, useState } from 'react'
import _ from 'lodash'


import './MovieList.css'

import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MovieList = ({type,title,emoji}) => {
	const [movies, setMovies] = useState([])
	const [minRating,setminRating] = useState(0)
	const [filterMovies, setFilterMovies] = useState([])
	const [sort,setSort] = useState({
		by : 'default',
		order :'asc'
	})

	useEffect(() =>{
		fetchMovies()		
	},[])

	useEffect(()=>{
		if (sort.by !== "default") {
			const sortedMovies = _.orderBy(filterMovies, [sort.by],[sort.order])
			setFilterMovies(sortedMovies)
		}		
	},[sort])


	const fetchMovies = async() =>{
		const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=ff6552b3b190a00faa2c2a1991ee9557`);
		const data = await response.json();
		setMovies(data.results)
		setFilterMovies(data.results)
	}
	const handleFilter = (rate)=>{
		if(minRating === rate){
			setminRating(0)
			setFilterMovies(movies)
		}
		else{
			setminRating(rate)
		const filteredMovie = movies.filter(movie => movie.vote_average >= rate)
		setFilterMovies(filteredMovie)
		}		
	}
	const handleSort = (e) =>{
		const {name,value} = e.target;
		setSort((prev) => ({...prev,[name]: value}))
	}
	

	return (
		<section className='movie_list' id={title}> 
				
			<header className='align_center movie_list_header'>
			<h2 className=' align_center movie_list_heading'> {type}
				<img src={emoji} alt={`${emoji} icon`} className='popular_movie_emoji' />
			</h2>
			
			<div className=" align_center movie_list_fs">
				<FilterGroup minRating={minRating} 
				onRatingclick={handleFilter}
				ratings= {[8,7,6]}
				/>
				<select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by}>
				<option value="default">Sort By</option>
				<option value="release_date">Date</option>
				<option value="vote_average">Rating</option>
			</select>
			<select name="order" id="" className="movie_sorting" onChange={handleSort} value={sort.order}>
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>	
			</select>
			</div>			
			</header>
			<div className="movie_cards">
					{
						filterMovies.map((movie)=> (<MovieCard key={movie.id} movie={movie} 
						/>))}
					
					


			</div>
		</section>
	)
}

export default MovieList