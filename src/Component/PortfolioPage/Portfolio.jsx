import Img1 from './assets/1.png'
import Img2 from './assets/2.png'
import Img3 from './assets/3.png'
import Img4 from './assets/4.png'


function Portfolio() {

    return(
        <section id="Project" className="pt-36 pb-16 bg-slate-100 ">
           <div className="container">
              <div className="w-full px-4">
                 <div className="max-w-xl mx-auto text-center mb-16">
                    <h5 className="font-semibold text-lg text-ungu mb-2">Project</h5>
                    <h1 className="font-bold text-3xl text-dark mb-4">MY PROJECT</h1>
                    <p className="font-medium text-md text-slate-500">
                      My projects demonstrate creativity, functionality, and innovation, showcasing my journey in building impactful and user-focused web solutions.
                    </p>
                 </div>
              </div>

              <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">

                 <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={Img1} alt="Top up game" width="w-full" />
                    </div>       
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Top Up Landing Page</h3>
                    <p className='font-medium text-base text-slate-600'>I designed a top-up landing page that is fast, secure, responsive, and user-friendly.!</p>         
                 </div>

                 <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={Img2} alt="Tetris game" width="w-full" />
                    </div>       
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Tetris Game</h3>
                    <p className='font-medium text-base text-slate-600'>I designed a Tetris Game landing page that is interactive, responsive, with a retro-modern design.</p>         
                 </div>

                 <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={Img3} alt="Novel" width="w-full" />
                    </div>       
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Komik Landing Page</h3>
                    <p className='font-medium text-base text-slate-600'>I created this comic landing page to be engaging, colorful, and easily accessible for readers.</p>         
                 </div>

                 <div className="mb-12 p-4 md:w-1/2">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img src={Img4} alt="personal landing page" width="w-full" />
                    </div>       
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>personal portfolio Landing Page</h3>
                    <p className='font-medium text-base text-slate-600'>I designed this portfolio to be minimalist, elegant, and focused on showcasing my skills and work.</p>         
                 </div>

              </div>

           </div>
        </section>
    )
}

export default Portfolio