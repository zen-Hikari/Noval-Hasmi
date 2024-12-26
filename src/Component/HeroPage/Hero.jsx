import Profile from './assets/profile2.png'

function HeroPage() {
    return(
        <section id="Hero" className="pt-36">
           <div className="container">
              <div className="flex flex-wrap">

                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-semibold text-ungu md:text-xl">Hai There 👋, Im <span className="block font-bold mt-1 text-slate-900 text-4xl lg:text-5xl">Noval Hasmi</span></h1>
                    <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">High School Student</h2>
                    <p className="text-slate-500 leading-relaxed mb-10">I am creating this web portfolio to show my skills in the field of web programming.
                    </p>

                    <a className="font-semibold text-white bg-ungu py-3 px-8 rounded-full hover:opacity-80 ease-in-out transition duration-200" href="#">Contact Me</a>
                </div>

                <div className="w-full self-end px-4 lg:w-1/2">
                    <div className="relative  mt-10 lg:mt-9 lg:right-0">
                        <img  src={Profile} alt="profile" className='mx-auto max-w-full   
                                                                  '/>
                      <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 w-600 h-600 md:w-300 md:h-300 lg:w-400 lg:h-400">
                       <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                         fill="#CA8A04"
                         d="M 80,0 C 80,20.318440936164 74.34399753143222,35.85818000293355 61.28355544951824,51.42300877492314 C 48.223113367604256,66.98783754691273 33.90161237640935,75.2563599993786 13.891854213354433,78.78462024097664 C -6.117903949700489,82.31288048257467 -22.403713983988293,79.4412527708371 -39.999999999999986,69.2820323027551 C -57.596286016011675,59.12281183467311 -68.22609358173172,46.45470047964114 -75.17540966287267,27.36161146605351 C -82.12472574401362,8.26852245246588 -82.12472574401362,-8.268522452465866 -75.17540966287268,-27.361611466053493 C -68.22609358173175,-46.45470047964112 -57.59628601601172,-59.12281183467307 -40.000000000000036,-69.28203230275507 C -22.40371398398835,-79.44125277083707 -6.117903949700535,-82.31288048257468 13.891854213354398,-78.78462024097665 C 33.90161237640933,-75.25635999937862 48.223113367604235,-66.98783754691276 61.283555449518225,-51.42300877492317 C 74.34399753143222,-35.85818000293357 80,-20.318440936164 80,0 Z" 
                         transform="translate(100 100) scale(1.1)" />
                         </svg>
                         </span>

                      
                    </div>
                </div> 
              </div>
           </div>
        </section>
    )
}
export default HeroPage