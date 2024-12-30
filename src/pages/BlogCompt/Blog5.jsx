import Logo from '../BlogPages/assets/logo.png'
import ImgApi from './assets/Api.png'
function Api() {
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
            src={ImgApi}
            alt="Pengenalan API"
          />
          <h1 className="text-2xl lg:text-3xl font-semibold text-center">
            Pengenalan API dan Cara Menggunakannya dalam Aplikasi Web
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-700 max-w-[1000px]">
            <span>
              API (Application Programming Interface) adalah sekumpulan definisi dan protokol
              yang memungkinkan satu aplikasi berinteraksi dengan aplikasi lainnya. Dalam konteks
              pengembangan web, API digunakan untuk menghubungkan aplikasi web dengan data atau
              layanan eksternal, seperti layanan cuaca, pembayaran online, atau platform media
              sosial.
            </span>
            <br />
            <br />
            <span>
              Ada dua jenis utama API yang sering digunakan dalam pengembangan aplikasi web: <strong>REST</strong> dan
              <strong>GraphQL</strong>. REST (Representational State Transfer) adalah arsitektur yang lebih sederhana
              dan sering digunakan dalam komunikasi antara klien dan server. Sementara GraphQL
              adalah alternatif yang lebih fleksibel, memungkinkan klien untuk meminta hanya data
              yang dibutuhkan, mengurangi jumlah permintaan dan meningkatkan efisiensi.
            </span>
            <br />
            <br />
            <span>
              Untuk menggunakan API dalam aplikasi web, Anda perlu melakukan permintaan HTTP
              ke server yang menyediakan data atau layanan yang dibutuhkan. Permintaan ini dapat
              dilakukan menggunakan berbagai metode seperti GET, POST, PUT, dan DELETE.
            </span>
            <br />
            <br />
            <span>
              Berikut adalah contoh sederhana bagaimana menggunakan API dalam aplikasi web menggunakan <strong>JavaScript</strong>:
            </span>
            <br />
            <pre className="bg-gray-100 p-4 rounded-lg mt-4 text-sm overflow-x-auto whitespace-pre-wrap break-words">
              {`fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));`}
            </pre>
            <br />
            <span>
              Dalam contoh di atas, kita menggunakan <strong>fetch API</strong> untuk mendapatkan data dari server. 
              Metode <strong>then()</strong> digunakan untuk menangani respons yang berhasil, 
              sementara <strong>catch()</strong> digunakan untuk menangani error jika terjadi masalah
              saat mengambil data.
            </span>
            <br />
            <br />
            <span>
              Setelah berhasil mendapatkan data, Anda dapat menggunakannya dalam aplikasi web,
              seperti menampilkan informasi cuaca pada halaman, mengupdate status pengguna, atau
              menampilkan daftar produk dari API e-commerce.
            </span>
            <br />
            <br />
            <span>
              Memahami cara menggunakan API dalam aplikasi web sangat penting untuk mengembangkan
              aplikasi yang dapat berinteraksi dengan berbagai sumber daya eksternal dan memberikan
              pengalaman pengguna yang lebih kaya.
            </span>
            <br />
            <br />
            <span>
              Dengan memahami dasar-dasar API dan cara menggunakannya, Anda dapat membangun aplikasi
              web yang lebih dinamis dan terhubung dengan berbagai layanan eksternal untuk memperluas
              fungsionalitas aplikasi Anda.
            </span>
          </p>
        </div>
      </section>
      
    )
}

export default Api