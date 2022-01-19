import Card from './Card'
import Data from './Data'
function CardSection(){
    // console.log(Data)
    const data=Data.map(item =>{
        return(
            <Card 
            src={item.coverImg}
            ratings={item.stats.rating}
            votes={item.stats.reviewCount}
            country={item.location}
            cost={item.price}
            title={item.title}
            status="Sold Out"
            />
        )
    })

    
    return(
        <div className="card_section">
         {data}
        </div>
    )
}

export default CardSection;