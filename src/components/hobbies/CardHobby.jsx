function CardHobby({ title = "Unknown Flower", description = "No description available", favorite ="No favorite", imgURL = "https://example.com/default-flower.jpg" }) {    
    return(
        <div className="rounded-[5px] bg-white shadow-[5px_5px_20px_hsla(0,0%,21%,0.384)] p-5 m-0 text-center w-full max-w-none box-border inline-block align-top transition-transform duration-200 ease-out motion-safe:hover:-translate-y-1 dark:bg-slate-800 dark:shadow-[0_5px_20px_rgb(0_0_0_/_0.45)]">
            <img className="w-[min(100%,22rem)] max-w-[350px] h-auto mb-8 mx-auto" src={imgURL} alt="Image"></img>
            <h2 className="m-0 font-[Arial,sans-serif] text-[hsla(35,67%,43%)] font-bold text-2xl dark:text-amber-300">{title}</h2>
            <p className="mb-8 text-left font-[Arial,sans-serif] text-[hsla(0,0%,30%)] dark:text-slate-300">{description}</p>
            <h3 className="font-[Arial,sans-serif] text-[hsla(0,0%,20%)] font-bold dark:text-slate-200">Favorite: {favorite}</h3>
        </div>
    );
}

export default CardHobby;