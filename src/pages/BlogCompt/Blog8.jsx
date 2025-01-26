import Safe from 'react-safe'
import Logo from '../BlogPages/assets/logo.png'
import Blog8 from './assets/distros_linux.png'
function Distro() {
    return(
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
      src={Blog8}
      alt="Distro Linux untuk Programmer"
    />
    <h1 className="text-2xl lg:text-3xl font-semibold text-center">
      Distro Linux Terbaik untuk Programmer
    </h1>
    <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
      <span>
        Linux telah menjadi pilihan utama bagi banyak programmer karena fleksibilitas,
        kestabilan, dan komunitas yang aktif. Namun, dengan banyaknya distro Linux yang
        tersedia, bagaimana cara memilih yang terbaik untuk kebutuhan pengembangan perangkat
        lunak? Berikut adalah beberapa distro Linux terbaik yang sangat cocok untuk programmer.
      </span>
      <br />
      <br />
      <strong>1. Ubuntu</strong>
      <br />
      <span>
        Ubuntu adalah salah satu distro Linux yang paling populer dan banyak digunakan oleh
        programmer. Dengan basis Debian, Ubuntu menawarkan kemudahan penggunaan dan akses
        cepat ke berbagai perangkat lunak pengembangan. Ubuntu juga memiliki ekosistem yang
        luas dan dukungan komunitas yang besar, membuatnya cocok untuk pengembangan perangkat
        lunak dan aplikasi.
      </span>
      <br />
      <br />
      <strong>2. Arch Linux</strong>
      <br />
      <span>
        Arch Linux adalah distro yang terkenal karena sifatnya yang minimalis dan fleksibel.
        Pengguna Arch memiliki kontrol penuh atas sistem mereka dan dapat menyesuaikan setiap
        aspek dari instalasi hingga konfigurasi. Arch Linux sangat cocok untuk programmer yang
        ingin belajar lebih dalam tentang Linux dan menginginkan kontrol lebih besar atas
        lingkungan pengembangan mereka.
      </span>
      <br />
      <br />
      <strong>3. Fedora</strong>
      <br />
      <span>
        Fedora adalah distro yang dikembangkan oleh Red Hat dan sering dianggap sebagai
        distribusi cutting-edge. Fedora menyediakan banyak fitur terbaru yang berguna untuk
        pengembangan perangkat lunak. Distro ini juga sangat cocok bagi programmer yang
        tertarik dengan teknologi terbaru dan membutuhkan sistem yang stabil dan cepat.
      </span>
      <br />
      <br />
      <strong>4. Debian</strong>
      <br />
      <span>
        Debian adalah distro Linux yang terkenal karena stabilitasnya. Distro ini sangat
        cocok untuk pengembangan perangkat lunak jangka panjang dan bagi programmer yang
        membutuhkan lingkungan pengembangan yang konsisten dan bebas gangguan. Meskipun Debian
        mungkin tidak secerah distro lain dalam hal fitur terbaru, kestabilannya menjadikannya
        pilihan yang sangat baik untuk pengembangan aplikasi yang andal.
      </span>
      <br />
      <br />
      <strong>5. Pop!_OS</strong>
      <br />
      <span>
        Pop!_OS adalah distro yang dikembangkan oleh System76 dan didesain untuk meningkatkan
        pengalaman pengguna dalam pengembangan perangkat lunak. Pop!_OS menyertakan alat-alat
        pengembangan terbaik dan memiliki lingkungan desktop yang bersih dan modern. Ini juga
        memiliki dukungan luar biasa untuk pengembang yang bekerja dengan perangkat keras
        seperti GPU dan alat pengembangan perangkat keras.
      </span>
      <br />
      <br />
      <strong>6. Linux Mint</strong>
      <br />
      <span>
        Linux Mint adalah distro Linux berbasis Ubuntu yang sangat cocok untuk pengguna
        yang baru beralih ke Linux. Dengan antarmuka yang ramah pengguna, Linux Mint menjadi
        pilihan yang bagus bagi programmer yang menginginkan pengalaman Linux yang mudah
        tanpa mengorbankan kekuatan dan fleksibilitas.
      </span>
      <br />
      <br />
      <strong>Kesimpulan</strong>
      <br />
      <span>
        Semua distro yang disebutkan di atas memiliki kelebihan masing-masing dan cocok
        untuk programmer dengan kebutuhan yang berbeda. Ubuntu adalah pilihan yang sangat
        baik bagi pemula, sedangkan Arch Linux dan Fedora lebih cocok bagi pengguna yang
        ingin kontrol penuh dan teknologi terbaru. Debian dan Pop!_OS sangat baik untuk
        pengembangan perangkat lunak jangka panjang dan penggunaan perangkat keras yang
        lebih kuat, sementara Linux Mint adalah pilihan sempurna untuk mereka yang baru
        beralih ke Linux.
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

export default Distro
