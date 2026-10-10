import Card from "./CardSkill"

function Skills(){
    return(
        <>
            <div className="bg-white py-12 dark:bg-slate-950 dark:text-slate-100" id="skills">
                <h1 className="mt-0 font-['National_Park',Arial,sans-serif] text-5xl font-bold">Skills</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] auto-rows-fr gap-4 p-[10px] text-center mt-8">
                    <Card classCard ="mx-auto max-w-[200px] mb-[10px]" title="Java" description="I am pretty confident in Java programming as it is my primary language and well thought by our professor on my 2nd year in college. Thanks to him that I am proficient in Java programming as of today." imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCOcsHzq6lH24ctD0iut59jy7vczTd3Uemt8Ac87fsDlrCdLQ001t-2k&s=10"/>
                    <Card classCard ="mx-auto max-w-[150px] mb-[10px]" title="C" description="My first programming language that I learned in my 1st year in college. I have a basic understanding of C programming and can write simple programs." imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDAxeRqJNsJOY0OfWdnP_j-7LGFQxCOtsuY4zVvc4_g&s=10"/>
                    <Card classCard="mx-auto max-w-[200px] mb-[10px]" title="HTML" description="I have a strong understanding of HTML and can create well-structured web pages." imgURL="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"/>
                    <Card classCard="mx-auto max-w-[150px] mb-[10px]" title="CSS" description="I am proficient in CSS and can style web pages to create visually appealing designs." imgURL="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1920px-CSS3_logo_and_wordmark.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"/>
                    <Card classCard="mx-auto max-w-[200px] mb-[10px]" title="JavaScript" description="I have basic experience with JavaScript and can add interactivity to web pages." imgURL="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png"/>
                    <Card classCard="mx-auto max-w-[200px] mb-[10px]" title="React" description="Just started react by developing this personal website." imgURL="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"/>
                </div>
            </div>
        </>
    )
}

export default Skills