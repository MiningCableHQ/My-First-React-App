function CardSkill({ classCard = "class-img", title = "Unknown Flower", description = "No description available", imgURL = "https://example.com/default-flower.jpg" }) {    
    return(
        <div className="card">
            <img className={classCard} src={imgURL} alt="Image"></img>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
}

export default CardSkill;