function Contact() {
    return (
        <section className="pt-36 pb-32" id="Contact">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h5 className="font-semibold text-lg text-ungu mb-2">Contact</h5>
                        <h1 className="font-bold text-3xl text-dark mb-4">Contact Us</h1>
                        <p className="font-medium text-md text-slate-500">
                            Connect with me for partnerships, questions, or support through my dedicated contact page.
                        </p>
                    </div>
                </div>

                <form
                    action="https://formspree.io/f/xannoaob"
                    method="POST"
                >
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label
                                htmlFor="name"
                                className="tex-base text-ungu font-bold"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-ungu focus:ring-2 focus:border-ungu"
                                required
                            />
                        </div>

                        <div className="w-full px-4 mb-8">
                            <label
                                htmlFor="email"
                                className="tex-base text-ungu font-bold"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-ungu focus:ring-2 focus:border-ungu"
                                required
                            />
                        </div>

                        <div className="w-full px-4 mb-8">
                            <label
                                htmlFor="message"
                                className="tex-base text-ungu font-bold"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-ungu focus:ring-2 focus:border-ungu h-36"
                                required
                            ></textarea>
                        </div>

                        <div className="w-full px-4">
                            <button
                                type="submit"
                                className="text-base font-semibold text-white bg-ungu py-2 rounded-full w-full hover:opacity-80 hover:shadow-lg"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
