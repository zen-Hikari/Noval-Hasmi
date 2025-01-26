import Logo from './assets/logo.png'
import Blog1 from '../../Component/BLogPage/assets/1.png'
import Blog2 from '../../Component/BLogPage/assets/2.png'
import Blog3 from '../../Component/BLogPage/assets/3.png'
import Blog4 from '../BlogCompt/assets/framework.png'
import Blog5 from '../BlogCompt/assets/api.png'
import Blog6 from '../BlogCompt/assets/Linux.png'
import Blog7 from '../BlogCompt/assets/linux-vs-macOS.png'
import Blog8 from '../BlogCompt/assets/distros_linux.png'
function BlogPages() {

    return(
        <section className='justify-center'>
               <div className="logo flex justify-around items-center  ">
                <div className='flex justify-center items-center gap-2 '>
                  <img width="50px" src={Logo} alt="Logo" />
                  <h3 className='font-semibold text-2xl text-ungu'>Noval Hasmi</h3>
                </div>
                   <a href="/" >
                       <i className="text-slate-500 text-2xl ai-arrow-left"></i>
                   </a>
               </div>
            <div className="container">
            <div className="w-full px-4 pt-10">
                  <div className="max-w-xl mx-auto text-center mb-16">
                      <h5 className="font-semibold text-lg text-ungu mb-2">Blog</h5>
                      <h1 className="font-bold text-3xl text-dark mb-4">Blog Posted</h1>
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
                                    <a href="/Blog/Royal-klude-review" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Review Royal Kludge RK65: Keyboard Mechanical Minimalis yang Memukau</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Royal Kludge RK65 adalah pilihan sempurna untuk kalian yang mencari keyboard mechanical dengan desain ...</p>
                                <a  href="/Blog/Royal-klude-review" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog2} alt="blog2" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/Unreal-powerfull-engine" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Unreal Engine Mengapa Menjadi Engine Terkuat di Industri Game</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Unreal Engine saat ini dianggap sebagai salah satu engine terkuat di industri pengembangan game karena kombi ...</p>
                                <a  href="/Blog/Unreal-powerfull-engine" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog3} alt="blog3" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/Bug-Remote-Code-Execution-(RCE)" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>bagaimana bug Remote Code Execution (RCE) bisa terjadi</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Bug Remote Code Execution (RCE) terjadi ketika aplikasi atau sistem tidak berhasil memvalidasi input pengguna dengan ...</p>
                                <a  href="/Blog/Bug-Remote-Code-Execution-(RCE)" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog4} alt="blog4" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/Memilih-Framework-Front-End-untuk-Proyek-Web" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Panduan Memilih Framework Front-End untuk Proyek Web</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'> Memilih framework front-end yang tepat adalah langkah pertama yang krusial
                                dalam pengembangan aplikasi web. Tig ...</p>
                                <a  href="/Blog/Memilih-Framework-Front-End-untuk-Proyek-Web" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog5} alt="blog5" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Pengenalan API dan Cara Menggunakannya dalam Aplikasi Web</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>API (Application Programming Interface) adalah sekumpulan definisi dan protokol
                                yang memungkinkan satu aplikasi berint ...</p>
                                <a  href="/Blog/Pengenalan-API-dan-Cara-Menggunakannya-dalam-Aplikasi-Web" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog6} alt="blog6" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/5-Distribusi-Linux-Terbaik-untuk-Pengguna-Baru-di-2024" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>5 Distribusi Linux Terbaik untuk Pengguna Baru di 2024</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Jika Anda baru saja beralih ke Linux, memilih distribusi yang tepat bisa
                                menjadi tantangan. Namun, ada banyak distribus ...</p>
                                <a  href="/Blog/5-Distribusi-Linux-Terbaik-untuk-Pengguna-Baru-di-2024" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog7} alt="blog7" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/Linux-vs-macOS:-Mana-yang-Lebih-Baik-untuk-Pengguna-Kreatif?" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Linux vs macOS: Mana yang Lebih Baik untuk Pengguna Kreatif?</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Bagi banyak orang yang bekerja di bidang kreatif, seperti desain grafis, pengeditan video, atau musik, pilihan sistem operasi sangat mempengaruhi produktivitas. ...</p>
                                <a  href="/Blog/Linux-vs-macOS:-Mana-yang-Lebih-Baik-untuk-Pengguna-Kreatif?" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Blog8} alt="blog8" className='w-full'/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="/Blog/Distro-Linux-Terbaik-untuk-Programmer" className='block mb-3 font-semibold text-xl text-dark hover:text-ungu truncate'>Distro Linux Terbaik untuk Programmer</a>
                                </h3>
                                <p className='font-medium tex-base text-slate-500 mb-6'>Linux telah menjadi pilihan utama bagi banyak programmer karena fleksibilitas, kestabilan, dan komunitas yang aktif...</p>
                                <a  href="/Blog/Distro-Linux-Terbaik-untuk-Programmer" className='font-medium text-sm text-white bg-ungu py-2 px-4 rounded-md hover:opacity-80'>Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogPages
