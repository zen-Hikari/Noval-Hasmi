import Safe from 'react-safe'
import Logo from '../BlogPages/assets/logo.png'
import Blog2 from '../../Component/BLogPage/assets/2.png'
function BlogUnreal() {

    return (
        <section className="flex flex-col items-center px-4 lg:px-20 py-10">
        <div className="logo flex justify-between items-center w-full max-w-6xl">
          <div className="flex items-center gap-3">
            <img width="50px" src={Logo} alt="Logo" />
            <h3 className="font-semibold text-2xl lg:text-3xl text-ungu">Noval Hasmi</h3>
          </div>
          <a href="/Blog" className="text-slate-500 hover:text-ungu">
            <i className="ai-arrow-left text-2xl"></i>
          </a>
        </div>
      
        <div className="container mt-10 flex flex-col items-center gap-8 max-w-6xl">
          <img
            className="w-full max-w-[900px] rounded-xl shadow-lg"
            src={Blog2}
            alt="Unreal Engine"
          />
          <h1 className="text-2xl lg:text-3xl font-semibold text-center">
            Unreal Engine: Mengapa Menjadi Engine Terkuat di Industri Game
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
            <span>
              Unreal Engine saat ini dianggap sebagai salah satu engine terkuat di
              industri pengembangan game karena kombinasi teknologi canggih dan
              fleksibilitasnya yang luar biasa. Dengan fitur seperti grafis
              fotorealistik yang didukung oleh <strong>Lumen</strong> dan <strong>Nanite</strong>,
              Unreal Engine menawarkan pengalaman visual yang mendekati realitas.
            </span>
            <br />
            <br />
            <span>
              Salah satu fitur unggulannya, <strong>Blueprint Visual Scripting</strong>,
              memungkinkan pengembang pemula maupun profesional untuk menciptakan
              mekanisme game tanpa harus menulis banyak kode, menjadikan proses
              pengembangan lebih cepat dan efisien.
            </span>
            <br />
            <br />
            <span>
              Selain itu, Unreal Engine mendukung berbagai platform, mulai dari konsol,
              PC, hingga teknologi <strong>Virtual Reality</strong>, menjadikannya pilihan
              utama bagi para developer game modern. Tidak hanya itu, komunitasnya
              yang luas dan dukungan sumber daya membuat proses belajar dan pengembangan
              menjadi lebih mudah.
            </span>
            <br />
            <br />
            <span>
              Dengan semua keunggulan ini, tidak heran jika Unreal Engine terus
              memimpin di industri game sebagai solusi yang inovatif dan futuristik.
              Jadi, apakah Anda siap untuk menciptakan karya masterpiece Anda berikutnya
              dengan Unreal Engine?
            </span>
            <div className='pt-5' id="disqus_thread"></div>
      <Safe.script>
        {
           (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://https-noval-hasmi-vercel-app.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })()
        }
      </Safe.script>
          </p>
        </div>
      </section>
      

    )
}

export default BlogUnreal