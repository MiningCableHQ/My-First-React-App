function CardSkill({ classCard = "class-img", title = "Unknown Flower", description = "No description available", imgURL = "https://example.com/default-flower.jpg" }) {    
    return(
        <div className="rounded-[5px] shadow-[5px_5px_20px_hsla(0,0%,21%,0.384)] p-5 m-0 text-center w-full max-w-none box-border inline-block align-top">
            <img className={classCard} src={imgURL} alt="Image"></img>
            <h2 className="m-0 font-[Arial,sans-serif] text-[hsla(35,67%,43%)] font-bold text-2xl">{title}</h2>
            <p className="mb-8 text-left font-[Arial,sans-serif] text-[hsla(0,0%,30%)]">{description}</p>
        </div>
    );
}

export default CardSkill;