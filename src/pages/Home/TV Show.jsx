import  "./Tvshow.css"
import Navbar from "../../components/Navbar/Navbar";
import TitleCard from "../../components/TitleCards/TitleCard";

const TVShow=()=>{
    return(
        <div>
            <Navbar/>
            <div className="temp">
                <TitleCard title="Only on Netflix" category="now_playing" />
            </div>
        </div>
    )

}

export default TVShow;
