import { useEffect, useState } from "react";
import '../stylesheets/botmfiltr.css'

const Botmfiltr = () => {

  const [categori, setCategori] = useState([]);

  useEffect(() => {
    // Fetch data from the meal categories API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategori(data.categories))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container-flow container-lg main_btm_filter_container">
      <div className="main_btm_filter_sub-container">
        <div className="main_btm_filter">
          <div className="main_btm_filter_head">
            <h1>Explore Latest Movies in Chennai by Language</h1>
          </div>

          <div className="main_btm_filter_header_lang">
            {categori.map(category => (
              <div className="btm_filter_header_lang" key={category.idCategory}>
                <a href="#">{category.strCategory}</a>
              </div>
            ))}

          </div>
        </div>

        <div className="main_btm_filter2">
          <div className="main_btm_filter_head">
            <h1>Explore Latest Movies in Chennai by Genre</h1>
          </div>
          <div className="main_btm_filter_header_lang">

            {categori.map(category => (
              <div className="btm_filter_header_lang" key={category.idCategory}>
                <a href="#">{category.strCategory}</a>
              </div>
            ))}

          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Botmfiltr