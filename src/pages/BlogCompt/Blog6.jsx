import Logo from '../BlogPages/assets/logo.png'
import Linux from './assets/Linux.png'
function BlogLinux() {
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
      src={Linux}
      alt="Linux"
    />
    <h1 className="text-2xl lg:text-3xl font-semibold text-center">
    5 Best Linux Distros for Beginners
    </h1>
    <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
      <span>
        Jika Anda baru saja beralih ke Linux, memilih distribusi yang tepat bisa
        menjadi tantangan. Namun, ada banyak distribusi yang dirancang untuk
        pemula yang menawarkan pengalaman pengguna yang ramah, mudah digunakan,
        dan stabil. Berikut adalah 5 distribusi Linux terbaik untuk pengguna baru
        di 2024.
      </span>
      <br />
      <br />
      <span>
        <strong>1. Ubuntu</strong> adalah distribusi Linux paling populer di dunia
        dan sangat ramah pengguna. Ubuntu menyediakan antarmuka yang sederhana dan
        dokumentasi yang lengkap, yang sangat membantu pemula. Dengan banyaknya
        aplikasi yang tersedia di Ubuntu Software Center, ini adalah pilihan yang
        sangat baik bagi siapa saja yang baru memulai dengan Linux.
      </span>
      <br />
      <br />
      <span>
        <strong>2. Linux Mint</strong> adalah distribusi berbasis Ubuntu yang lebih
        ringan dan lebih sederhana. Dengan antarmuka yang mirip dengan Windows,
        Linux Mint adalah pilihan sempurna bagi pengguna yang baru beralih dari
        sistem operasi berbasis Windows. Ini adalah pilihan yang sangat baik untuk
        komputer dengan spesifikasi rendah.
      </span>
      <br />
      <br />
      <span>
        <strong>3. Zorin OS</strong> adalah distribusi Linux yang didesain untuk
        pengguna yang beralih dari Windows. Zorin OS menawarkan antarmuka pengguna
        yang sangat mirip dengan Windows, membuatnya lebih mudah bagi pengguna
        Windows untuk beradaptasi dengan Linux. Zorin OS juga hadir dengan banyak
        aplikasi pra-instal untuk kebutuhan sehari-hari.
      </span>
      <br />
      <br />
      <span>
        <strong>4. Pop!_OS</strong> adalah distribusi yang dikembangkan oleh System76,
        yang dirancang untuk memberikan pengalaman pengguna yang luar biasa
        dengan antarmuka yang sangat modern. Pop!_OS sangat baik untuk pengguna
        yang ingin menjalankan Linux dengan perangkat keras terbaru dan gaming.
        Ini adalah pilihan yang solid untuk pengguna yang tertarik pada kinerja dan
        dukungan perangkat keras.
      </span>
      <br />
      <br />
      <span>
        <strong>5. Elementary OS</strong> dikenal dengan antarmuka penggunanya yang
        bersih dan elegan, sangat cocok untuk mereka yang lebih menyukai estetika
        dalam penggunaan sistem operasinya. Elementary OS memberikan pengalaman
        pengguna yang hampir mirip dengan macOS dan sangat mudah digunakan, bahkan
        untuk pemula.
      </span>
      <br />
      <br />
      <span>
        Masing-masing distribusi Linux ini menawarkan sesuatu yang unik, namun
        semuanya dirancang untuk membantu pemula memulai dengan Linux tanpa
        merasa kewalahan. Pilihlah distribusi yang paling sesuai dengan kebutuhan
        Anda dan mulailah menjelajah dunia Linux!
      </span>
    </p>
  </div>
</section>
    
    )
}

export default BlogLinux