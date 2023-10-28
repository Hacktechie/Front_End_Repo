import { useSelector } from "react-redux";
import '../stylesheets/botmfiltr.css'

const Botmfiltr = () => {

  const movies = useSelector(state => state.data.movies)
  const genres = []
  const languages = []

  movies.forEach(item => {
    item.language.split(', ').forEach(innerItem => {
      !languages.includes(innerItem) && languages.push(innerItem)
    })

    item.grn.forEach(innerItem => {
      !genres.includes(innerItem) && genres.push(innerItem)
    })
  })

  return (
    <div className="container-flow container-lg main_btm_filter_container">
      <div className="main_btm_filter_sub-container">
        <div className="main_btm_filter">
          <div className="main_btm_filter_head">
            <h1>Explore Latest Movies in Chennai by Language</h1>
          </div>

          <div className="main_btm_filter_header_lang">
            {languages.map((lang, index) => (
              <div className="btm_filter_header_lang" key={index}>
                <a href="#">{lang} Movies</a>
              </div>
            ))}

          </div>
        </div>

        <div className="main_btm_filter2">
          <div className="main_btm_filter_head">
            <h1>Explore Latest Movies in Chennai by Genre</h1>
          </div>
          <div className="main_btm_filter_header_lang">

            {genres.map((genre, index) => (
              <div className="btm_filter_header_lang" key={index}>
                <a href="#">{genre} Movies</a>
              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Botmfiltr