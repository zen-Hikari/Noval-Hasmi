import Safe from 'react-safe'
import Logo from '../BlogPages/assets/logo.png'
import Blog3 from '../../Component/BLogPage/assets/3.png'
function BlogRCE () {

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
      src={Blog3}
      alt="Bug RCE"
    />
    <h1 className="text-2xl lg:text-3xl font-semibold text-center">
      Bug Remote Code Execution (RCE): Mengapa Ini Bisa Terjadi
    </h1>
    <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
      <span>
        Bug Remote Code Execution (RCE) terjadi ketika aplikasi atau sistem tidak
        berhasil memvalidasi input pengguna dengan benar, memungkinkan penyerang untuk
        mengirimkan kode berbahaya yang dapat dieksekusi di server atau perangkat lain
        yang terhubung. Hal ini sering kali terjadi melalui celah di aplikasi web, seperti
        form input atau parameter URL, di mana kode yang tidak aman dapat disisipkan dan
        dijalankan tanpa pengawasan yang memadai.
      </span>
      <br />
      <br />
      <span>
        Ketika bug RCE berhasil dieksploitasi, penyerang bisa memperoleh kontrol penuh
        atas sistem target, memanfaatkan kerentanannya untuk menjalankan perintah berbahaya,
        mencuri data sensitif, atau bahkan merusak sistem dari jarak jauh.
      </span>
      <br />
      <br />
      <span>
        Untuk mencegah RCE, penting untuk menerapkan validasi input yang ketat, penggunaan
        teknik pengamanan seperti sanitasi data, serta pembaruan rutin pada perangkat lunak
        agar terhindar dari celah keamanan yang bisa dimanfaatkan oleh penyerang.
      </span>
      <br />
      <br />
      <span>
        RCE menjadi salah satu jenis bug yang sangat berbahaya dan sering menjadi target
        utama dalam uji penetrasi, sehingga mengatasi kerentanannya harus menjadi prioritas
        dalam pengembangan perangkat lunak yang aman dan tahan terhadap ancaman.
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

export default BlogRCE