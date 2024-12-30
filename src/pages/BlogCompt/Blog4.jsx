import Logo from '../BlogPages/assets/logo.png'
import Blog4 from './assets/framework.png'


function Framework() {

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
      src={Blog4}
      alt="Framework Front-End"
    />
    <h1 className="text-2xl lg:text-3xl font-semibold text-center">
      Panduan Memilih Framework Front-End untuk Proyek Web
    </h1>
    <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
      <span>
        Memilih framework front-end yang tepat adalah langkah pertama yang krusial
        dalam pengembangan aplikasi web. Tiga framework populer yang sering digunakan
        oleh pengembang adalah <strong>React</strong>, <strong>Vue.js</strong>, dan
        <strong>Angular</strong>. Masing-masing memiliki kelebihan dan kekurangan yang perlu
        dipertimbangkan, tergantung pada kebutuhan proyek Anda.
      </span>
      <br />
      <br />
      <span>
        <strong>React</strong> adalah pilihan yang sangat populer untuk aplikasi web
        interaktif dan dinamis. Dengan pendekatan berbasis komponen dan virtual DOM, React
        memungkinkan pembaruan UI yang cepat dan efisien. React lebih cocok untuk proyek
        dengan kebutuhan skalabilitas besar dan komunitas yang sangat aktif.
      </span>
      <br />
      <br />
      <span>
        Di sisi lain, <strong>Vue.js</strong> menawarkan sintaks yang lebih sederhana dan
        lebih mudah dipahami oleh pemula. Vue.js lebih cocok untuk aplikasi kecil hingga
        menengah dengan fitur-fitur reaktif yang mudah diintegrasikan ke dalam aplikasi
        yang sudah ada. Ini adalah pilihan tepat jika Anda mencari fleksibilitas dengan
        dokumentasi yang lengkap.
      </span>
      <br />
      <br />
      <span>
        Terakhir, <strong>Angular</strong> adalah framework yang lebih terstruktur dengan
        banyak fitur bawaan, seperti routing, form handling, dan komunikasi HTTP. Angular
        lebih cocok untuk aplikasi besar dengan kebutuhan pengelolaan state yang kompleks.
        Namun, karena Angular lebih berat dibandingkan dengan React atau Vue, mungkin tidak
        cocok untuk proyek yang lebih kecil atau prototipe cepat.
      </span>
      <br />
      <br />
      <span>
        Jadi, bagaimana memilih yang terbaik? Jika proyek Anda membutuhkan performa tinggi
        dan skalabilitas besar, <strong>React</strong> mungkin pilihan yang tepat. Namun,
        jika Anda membutuhkan sesuatu yang lebih ringan dan mudah dipahami, <strong>Vue.js</strong>
        bisa menjadi pilihan terbaik. Jika proyek Anda besar dan membutuhkan solusi yang
        terstruktur, <strong>Angular</strong> dapat menjadi pilihan yang solid.
      </span>
      <br />
      <br />
      <span>
        Pilihan framework front-end yang tepat akan sangat bergantung pada jenis proyek
        dan pengalaman tim pengembang. Dengan memahami kelebihan masing-masing framework,
        Anda dapat membuat keputusan yang lebih baik dalam memulai proyek web Anda.
      </span>
    </p>
  </div>
</section>

    )
}

export default Framework