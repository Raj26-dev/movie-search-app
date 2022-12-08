import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import movieIcon from "../../images/pngaaa.com-2989054.png"

const Header = (props) => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={movieIcon} /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                <form class="nosubmit">
                    <input class="nosubmit" type="search" placeholder="Search..." value={props.searchQuery} onChange={props.onTextChange}/>
                </form>
            </div>
        </div>
    )
}

export default Header