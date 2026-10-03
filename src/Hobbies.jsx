import Card from './CardHobby'

function Hobbies() {
    return (
        <>
            <div className="bg-[hsl(0,0%,96%)] py-12" id="hobbies">
                <h1 className="mt-0 text-center font-['National_Park',Arial,sans-serif] text-5xl font-bold">My Hobbies</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] auto-rows-fr gap-4 p-[10px] text-center mt-8">
                    <Card title="Playing Video Games" description="I enjoy playing video games in my free time. It helps me relax and have fun" favorite="Terraria" imgURL="https://thumb.wikimedia.org/wikipedia/en/thumb/1/1a/Terraria_Steam_artwork.jpg/250px-Terraria_Steam_artwork.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"/>
                    <Card title="Reading Manga" description="I love reading manga, especially action and fantasy genres. It allows me to explore different worlds and stories" favorite="One Piece" imgURL="https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"/>
                    <Card title="Watching Anime" description="I am a big fan of anime. I enjoy watching various series and movies, and it has become a significant part of my entertainment" favorite="Jojo's Bizzare Adventure" imgURL="https://thumb.wikimedia.org/wikipedia/en/thumb/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg/250px-JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"/>
                </div>
            </div>
        </>
    );
}

export default Hobbies