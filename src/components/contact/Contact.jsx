function Contact() {
    return(
        <>
            <div id="contact" className="bg-[hsl(0,0%,96%)] px-4 py-12 dark:bg-slate-900 dark:text-slate-100">
                <h1 className="mt-0 font-['National_Park',Arial,sans-serif] text-5xl font-bold">Contact</h1>

                <p className="mx-auto mt-4 max-w-2xl text-center text-[hsl(0,0%,30%)] dark:text-slate-300">
                    Have a question, want to talk about a project, or just want to connect?
                    Send me a message using the form below, and I’ll get back to you as soon as I can.
                </p>

                <form className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-5 rounded-lg bg-white p-6 shadow-md dark:bg-slate-800 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        
                    </div>
                    <label htmlFor="firstName" className="font-semibold">First Name</label>
                    <input id="firstName" name="firstName" type="text" placeholder="First Name" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-2 focus:outline-amber-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"/>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="font-semibold">Last Name</label>
                        <input id="lastName" name="lastName" type="text" placeholder="Last Name" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-2 focus:outline-amber-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"/>
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input id="email" name="email" type="email" placeholder="Email" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-2 focus:outline-amber-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"/>
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                        <label htmlFor="message" className="font-semibold">Message</label>
                        <textarea id="message" name="message" placeholder="Message" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-2 focus:outline-amber-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"></textarea>
                    </div>

                    <button type="submit" className="rounded-md bg-[hsl(35,67%,43%)] px-5 py-3 font-bold text-white transition-colors hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 sm:col-span-2">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;