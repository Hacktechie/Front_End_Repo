import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../helpers/supabase'
import { BsPlayCircle } from 'react-icons/bs'
import NotFound from './NotFound'
import { Spinner } from 'react-bootstrap'
import '../stylesheets/moviePage.css'

function MoviePage() {

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('movies')
          .select('*')
          .eq('id', id)

        if (error) {
          throw new Error(error)
        } else {
          setMovie(data[0])
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  return (
    <>
      {
        loading ? (

          <div className='c-spinner-container'>
            <Spinner variant='info' />
          </div>

        ) : movie ? (

          <div className='movie_banner_img_container' style={{ backgroundImage: `url(${movie.cvr_path})` }}>

            <button className='play_btn'>
              <BsPlayCircle size={40} color='white' />
            </button>

            <div className="container-lg about_movie">

              <h2>{movie.label}</h2>

              <p>
                {movie.censor}
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {`${Math.floor(movie.duration / 60)}hrs ${movie.duration % 60} mins`}
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {movie.grn?.join(', ')}
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {movie.language}
              </p>

            </div>

          </div>

        ) : <NotFound />
      }
    </>
  )
}

MoviePage.propTypes = {
  id: PropTypes.string
}

export default MoviePage