function CardHobby({ title = "Unknown Flower", description = "No description available", favorite ="No favorite", imgURL = "https://example.com/default-flower.jpg" }) {    
    return(
        <div className="card">
            <img className="card-img" src={imgURL} alt="Image"></img>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <h3 className="card-favorite">Favorite: {favorite}</h3>
        </div>
    );
}

export default CardHobby;