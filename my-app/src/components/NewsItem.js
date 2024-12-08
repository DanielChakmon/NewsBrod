import NewsDate from "./NewsDate";
import './NewsItem.css'
function NewsItem(props){
    if(props.link === "https://removed.com"){
        return
    }
    return(
        <div className= 'news_item'>
            <img className='item_image' src={props.image} alt= 'not found'/>
            <div className= 'item_title'>
                {props.title}
            </div>
            <div className= 'item_date'>
               <NewsDate date={props.date}/>
            </div>
            <div className= 'item_link'>
               <a  href={props.link}>
                     source
                </a> 
            </div>
        </div>
    )
}

export default NewsItem