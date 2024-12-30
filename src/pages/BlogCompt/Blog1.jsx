import Logo from '../BlogPages/assets/logo.png'
import Blog1 from '../../Component/BLogPage/assets/1.png'
function BlogKeyboard() {

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
      src={Blog1}
      alt="Img"
    />
    <h1 className="text-2xl lg:text-3xl font-semibold text-center">
      Royal Kludge RK65: Keyboard Mechanical Minimalis yang Memukau
    </h1>
    <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
      <span>
        Royal Kludge RK65 adalah pilihan sempurna untuk kalian yang mencari
        keyboard mechanical dengan desain compact 65%. Dengan kombinasi fitur
        wireless dan kabel, keyboard ini menawarkan fleksibilitas tinggi, cocok
        untuk bekerja maupun bermain game.
      </span>
      <br />
      <br />
      <span>
        Tombol-tombolnya menggunakan switch yang responsif, memberikan
        pengalaman mengetik yang nyaman dan tactile. Ditambah lagi, backlight
        RGB-nya bisa diatur sesuai selera, memberikan sentuhan estetika yang
        modern.
      </span>
      <br />
      <br />
      <span>
        Namun, ada beberapa catatan seperti stabilizer yang sedikit berisik dan
        material keycaps yang terasa biasa saja. Meski begitu, dengan harga
        yang terjangkau, Royal Kludge RK65 tetap menjadi salah satu keyboard
        mechanical terbaik di kelasnya.
      </span>
      <br />
      <br />
      <span>
        Apakah keyboard ini layak dibeli? Jawabannya tergantung kebutuhan
        kalian, tapi bagi saya, RK65 menawarkan kombinasi fitur, desain, dan
        performa yang sulit untuk diabaikan.
      </span>
    </p>
  </div>
</section>

    )
}

export default BlogKeyboard