import Star_1 from '../images/Star 1.png'
function Card(props){
    return(
        <div className="card_unit">
            <div className="card_container">
                <span className="badge">
                    {props.status}
                </span>
                <div className="card_image">
                    <img src={props.src} alt=""/>
                </div>
                <div className="card_text">
                  <div className="card_info">
                      <img src={Star_1} alt=""></img>
                      <span className="ratings">{props.ratings}</span>
                      <span className="votes">({props.votes})</span>
                      <span className="country">{props.country}</span>
                  </div>
                  <div className="card_description">
                    <span>{props.title}</span>
                  </div>
                  <div className="card_cost">
                      <span>From ${props.cost} </span>
                      <span>/ person</span>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Card;