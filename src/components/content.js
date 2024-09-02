import './content.css';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import video1 from './assets/video1.jpg';
import video2 from './assets/video2.jpg';
import video3 from './assets/video3.jpg';
import video4 from './assets/video4.jpg';
import video5 from './assets/video5.jpeg';
import video6 from './assets/video6.png';
import { FaYoutube } from "react-icons/fa";
export default function Content(){
    return(
        <div className="content">
            
            <div className="c1">
                <h1><FaYoutube color='red'/>Youtube</h1>
                <div className="c1r1">
                <div className="home">
                    <GoHomeFill size={30} />
                    <h4>Home</h4>
                </div>
                <div className="shorts">
                    <SiYoutubeshorts size={30} />
                    <h4>Shorts</h4>
                </div>
                <div className="subscription">
                    <MdSubscriptions size={30} />
                    <h4>Subscription</h4>
                </div>
                </div>
                <div className="c1r2">
                <div className="yourchannel">
                    <GrChannel size={30} />
                    <h4>Your Channel</h4>
                </div>
                <div className="history">
                    <LuHistory size={30} />
                    <h4>History</h4>
                </div>
                <div className="playlist">
                    <MdOutlinePlaylistPlay size={30} />
                    <h4>Playlist</h4>
                </div>
                <div className="yourvideos">
                    <MdOutlineVideoLibrary size={30} />
                    <h4>Your Videos</h4>
                </div>
                <div className="watchlater">
                    <MdOutlineWatchLater size={30} />
                    <h4>Watch Later</h4>
                </div>
                <div className="like">
                    <AiOutlineLike size={30} />
                    <h4>Liked Videos</h4>
                </div>
                </div>
            </div>
            <div className='c2'>
                {/* <div className='c2r1'></div> */}
                <div className='c2r2'>
                    <div className='video'>
                        <img src={video1} id='video'></img>
                        <h3>Tech solutions</h3>
                    </div>
                    <div className='video'>
                        <img src={video2} id='video'></img>
                        <h3>Best solution</h3>
                    </div>
                    <div className='video'>
                        <img src={video3} id='video'></img>
                        <h3>Voice model training</h3>
                    </div>
                </div>
                <div className='c2r3'>
                    <div className='video'>
                        <img src={video4} id='video'></img>
                        <h3>Top Health startups</h3>
                    </div>
                    <div className='video'>
                        <img src={video5} id='video'></img>
                        <h3>Ease Stress And Anxity</h3>
                    </div>
                    <div className='video'>
                        <img src={video6} id='video'></img>
                        <h3>How to Make Money Online</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}