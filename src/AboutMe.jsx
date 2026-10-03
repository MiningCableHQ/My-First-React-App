function AboutMe(){
    return(
        <>
            <div className="bg-[hsl(35,67%,43%)] py-12" id="aboutme">
                <h1 className="mt-0 mb-20 text-center font-['National_Park',Arial,sans-serif] text-5xl font-bold text-white">About Me</h1>
                <div className ="mx-auto flex flex-col items-center gap-8 px-4 max-w-5xl md:flex-row">
                    <img className="mb-[10px] max-h-[400px] max-w-[300px] rounded-[30%]" src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/605633207_26285910957663865_5550590204414316920_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x1536&ctp=s1536x1536&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2w-69Gwyj652rF3ali1DaW-PZGnGVhJlb49kacZWEmYyW6jUTXw_hga4AQ8HENmAkWv-t0PvEXYNcPeUi9bT6&_nc_ohc=BEOqjrt8ieIQ7kNvwHXyUxA&_nc_oc=AdrGwSOFh3F0yir8caACtmN69Icmb-YUd28YVejOX6mdHFMRT7fUjhbTYh6RCZISLmk&_nc_zt=23&_nc_ht=scontent.fceb1-2.fna&_nc_gid=jKqEWNvkK3jpDlhU8PT1yQ&_nc_ss=7b2a8&oh=00_AQM8HJPR3s12EZ7roUyHKnJ5H7o4pbJdXJmPoIXnnVPRDg&oe=6AC2B1D2" alt="My Photo" />
                    <div className="ml-4 text-left text-[hsl(0,0%,94%)]">
                        <h1 className="font-['National_Park',Arial,sans-serif] text-[2.3rem] font-bold">My name is Frank Daniel Rosero</h1>
                        <p className="flex font-[Arial, sans-serif] text-[1.1rem]">I am a 3rd BSIT student and study in Cebu Institute of Technology or CITU</p>
                        <p className="flex font-[Arial, sans-serif] text-[1.1rem]">This is my first ever website developed in React</p>
                        <p className="flex font-[Arial, sans-serif] text-[1.1rem]">I am born in Cebu City and native to Dalaguete</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe