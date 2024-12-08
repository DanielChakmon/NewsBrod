import NewsItem from "./NewsItem"


function NewsExpense (props){
    return(
        <div>
            {props.item.map((itemI,index) => (
                <NewsItem
                    key = {index}
                    title = {itemI.title}
                    image = {itemI.urlToImage}
                    link = {itemI.url}
                    date = {itemI.publishedAt}/>

                ))} 
        </div>
    )
}

export default NewsExpense