const Hero = ({ title = 'Become a React Dev', subtitle = 'Find the React job that fits your skills and needs' }) => {
    return (
        <section id="hero-bg" className="py-12 mb-4 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mt-32 mb-32 p-4 text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:text-6xl md:mx-0">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        { title }
                    </h1>
                    <p className="my-4 text-xl text-white">
                        { subtitle }
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Hero
