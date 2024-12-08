import './NewsDate.css'

function NewsDate(props){
    if(props.date != null){
        try{
            var date = new Date(props.date)
        } catch(error){
            console.log(error)
        }
        var month = date.toLocaleString('en-US', {month: 'long'})
        var day = date.toLocaleString('en-US', {day: '2-digit'})
        var year = date.getFullYear()
    }
    return(
        <div className="date">
            <div className="date_day">{day}</div>
            <div className="date_month">{month}</div>
            <div className="date_year">{year}</div>
        </div>
    )
}

export default NewsDate