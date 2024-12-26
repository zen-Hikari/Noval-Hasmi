import Gambar1 from './assets/1.svg.png'
import Gambar2 from './assets/2.svg.png'
import Gambar3 from './assets/3.svg.png'
import Gambar4 from './assets/4.svg.png'


function Client() {

    return(
        <section id="Client" className="pt-36 pb-32 bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h5 className="font-semibold text-lg text-ungu mb-2">Clients</h5>
                    <h1 className="lg:text-4xl md:text-4xl font-bold text-3xl text-white mb-4">who have worked together on my dream :3</h1>
                    <p className="font-medium text-md text-slate-500 md:text-lg text-center">
                      This page highlights the clients I’ve collaborated with, showcasing successful partnerships and impactful projects we’ve achieved together
                    </p>
                 </div>
                </div>

                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:pocaity-100 lg:mx-6 xl:mx-8 '> 
                            <img src={Gambar1} alt="mappa" />
                        </a>
                        <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:pocaity-100 lg:mx-6 xl:mx-8 '> 
                            <img src={Gambar2} alt="one piece" />
                        </a>
                        <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:pocaity-100 lg:mx-6 xl:mx-8 '> 
                            <img src={Gambar3} alt="naruto" />
                        </a>
                        <a href="" className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:pocaity-100 lg:mx-6 xl:mx-8 '> 
                            <img src={Gambar4} alt="dragon-ball z" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client