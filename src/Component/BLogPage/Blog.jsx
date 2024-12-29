import Blog1 from './assets/1.png'
import Blog2 from './assets/2.png'
import Blog3 from './assets/3.png'
import { useNavigate } from 'react-router-dom'
function Blog() {

    const Navigate = useNavigate()


    return(
        <section id="Blog" className="pt-36 pb-32 bg-slate-100">
             <div className="container">
                <div className="w-full px-4">
                  <div className="max-w-xl mx-auto text-center mb-16">
                      <h5 className="font-semibold text-lg text-ungu mb-2">Blog</h5>
                      <h1 className="font-bold text-3xl text-dark mb-4">Latest Posts</h1>
                      <p className="font-medium text-md text-slate-500">
                        Explore unique insights, inspiring stories, and valuable tips on my engaging and creative blog page.
                     </p>
                  </div>
                </div>

                <div className="flex flex-wrap">

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog1} alt="blog1" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Review Royal Kludge RK65: Keyboard Mechanical Minimalis yang Memukau</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Royal Kludge RK65 adalah pilihan sempurna untuk kalian yang mencari keyboard mechanical dengan desain ...</p>
                                <a onClick={Navigate} href="/BLog" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog2} alt="blog1" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Unreal Engine Mengapa Menjadi Engine Terkuat di Industri Game</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Unreal Engine saat ini dianggap sebagai salah satu engine terkuat di industri pengembangan game karena kombi ...</p>
                                <a onClick={Navigate} href="/Blog" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog3} alt="blog1" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>bagaimana bug Remote Code Execution (RCE) bisa terjadi</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Bug Remote Code Execution (RCE) terjadi ketika aplikasi atau sistem tidak berhasil memvalidasi input pengguna dengan ...</p>
                                <a onClick={Navigate} href="/Blog" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
             </div>
        </section>
    )
}

export default Blog