import googleicon from '../assets/Rakesh/play-store-icon.c234a79e.png'
import appleicon from '../assets/Rakesh/app-store-icon.e3523d28.svg.png'
import telephone from '../assets/Rakesh/telephone.png'
import faaq from '../assets/Rakesh/question mark.png'
import '../stylesheets/footer.css'
import { useEffect, useState } from 'react'
import { GrFacebook,GrTwitter } from "react-icons/gr";

const Footer = () => {
    const [categori, setCategori] = useState([]);

    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => setCategori(data.categories))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="footer_container">
            <div>
                <div className="footer_topsection">
                    <div className="footer_topsection-one">

                        <div className="footer_topsection_one_left">
                            <h1>Download Our  App</h1>

                            <div className="stores">
                                <a href="#"><img src={googleicon} alt="Google Playstore" /></a>
                                <a href="#"><img src={appleicon} alt="Apple Store" /></a>
                            </div>
                        </div>

                        <div className="footer_topsection_one_right d-flex">
                            <a className='right_store' href="#">
                                <div className="footer_topsection_one_right_icons">
                                    <img src={telephone} alt="Coustomer Care" />
                                </div>
                                Customer Care
                            </a>

                            <a className='right_store' href="#">
                                <div className="footer_topsection_one_right_icons">
                                    <img src={faaq} alt="FAQ" />
                                </div>
                                FAQ
                            </a>
                        </div>

                    </div>
                    <div className="footer_topsection-two">

                        <div className="browse_all">
                            <div className="browse_all_sub">
                                <div className="browse_all_sub_heading">
                                    Browse All
                                </div>
                                <ul className='browse_all_sub_list'>
                                    <li>
                                        <a href="#">Now Showing</a>
                                    </li>
                                    <li>
                                        <a href="#">Coming Soon</a>
                                    </li>
                                    <li>
                                        <a href="#">Movies</a>
                                    </li>
                                    <li>
                                        <a href="#">Cinemas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="browse_all">
                            <div className="browse_all_sub">
                                <div className="browse_all_sub_heading">
                                    Links
                                </div>
                                <ul className='browse_all_sub_list'>
                                    <li>
                                        <a href="#">Register</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                    <li>
                                        <a href="#">Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cinemas">
                            <div className="cinemas_heading d-flex">Cinemas</div>
                           
                            <ul className='cinemas_list' style={{ paddingLeft: 0 }}>
                                {categori.map(category => (
                                    <li key={category.idCategory}>
                                        <a href="#">{category.strCategory}</a>
                                    </li>)
                                )}
                            </ul>
                            
                        </div>
                        <div className="browse_all">
                            <div className="browse_all_sub">
                                <div className="browse_all_sub_heading">
                                    Browse All
                                </div>
                                <ul className='browse_all_sub_list'>
                                    <li>
                                        <a href="#">Support Service <br />(24x7)</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="footer_bottomsection d-flex">
                        <h1 className='d-flex mr-2'>Latest Movies to Book in <h1>Chennai</h1></h1>
                        <p className='d-flex'> {categori.map(category => (
                            <li key={category.idCategory}>
                                <a href="#">{category.strCategory}</a> |
                            </li>)
                        )}</p>
                    </div>

                    <div className="footer_online_movie_booking">
                        <h1>Chennai – Online Movie Ticket Booking</h1>
                        <p>Now don’t miss out on any movie whether it is Hollywood, Bollywood or any regional movies. Book movie tickets for your favourite movies from your home, office or while travelling. Just go to our website and partake the pleasure of effortless online <a href="#">movie tickets</a>  booking in Chennai. Don’t let the long queues and endless wait time ruin your movie-going experience.</p>

                        <h1>Movie Timings and Shows in Chennai </h1>
                        <p>So get set to experience a flawless and quick movie ticket booking platform which lets you choose from a number of multiplex theatres and a list of latest movies. What’s more? You get to choose the seats you want, select the show timings and even get attractive Paytm wallet loyalty cashback and discounts! You can also find all the <a href="#">upcoming movies</a>   and book your tickets for them so that you don’t miss out to see your favourite stars in action. Sounds like a dream? So just #PaytmKaro for all of your movie ticket booking in all the theatres nearby in Chennai. With a safe payment system, you have the ease of booking movie tickets from anywhere and anytime.</p>
                    </div>

                    <div className="end">
                        <div className="socio">
                            <h3> < a href="#"> <GrTwitter/> </a></h3>
                            <h3><a href="#"> <GrFacebook/> </a></h3>

                        </div>
                        <div className="copyrights">
                            Copyright © 2023 Orbgen Technologies Pvt. Ltd. All rights reserved . Terms of Use . Privacy Policy
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer