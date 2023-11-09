import "./Faktor.css";

export default function Faktor() {
    return (
        <>
            <h2 className="sub-judul">Faktor Yang Mempengaruhi Suhu</h2>
            <div className="img-faktor">
                <img src="../../public/images/faktor.jpeg" alt="Faktor Yang Mempengaruhi Suhu" />
                <img src="../../public/images/faktor2.jpeg" alt="Faktor Yang Mempengaruhi Suhu" />
            </div>
            <div className="faktor">
                <p>
                    Berdasarkan pengertian suhu yang telah dijelaskan di atas, dapat
                    diketahui bahwa suhu sebuah benda dapat berubah menjadi panas atau
                    dingin. Tentu ada banyak hal yang menjadi penyebab sebuah benda
                    memiliki suhu rendah atau tinggi.
                </p>
                <p>
                    Handoko dalam buku yang berjudul Pengantar Unsur-unsur Cuaca di
                    Stasiun Klimatologi Pertanian menyebutkan beberapa faktor yang dapat
                    mempengaruhi suhu. Berikut adalah faktor-faktor yang bisa mempengaruhi
                    suhu di permukaan bumi, di antaranya adalah:
                </p>
                <ol>
                    <li>
                        Jumlah radiasi yang diterima suatu benda perhari, perbulan,
                        pertahun, serta permusim.
                    </li>
                    <li>Adanya pengaruh tempat, yaitu daratan atau lautan</li>
                    <li>Adanya pengaruh dari ketinggian tempat dari permukaan bumi</li>
                    <li>
                        Dipengaruhi secara tidak langsung oleh pembawaan angin, apakah angin
                        yang membawa panas atau dingin.
                    </li>
                    <li>
                        Adanya pengaruh panas laten , yakni panas yang disimpan di dalam
                        atmosfer bumi
                    </li>
                    <li>
                        Adanya pengaruh dari penutup tanah, di mana tanah yang ditutupi
                        vegetasi temperaturnya akan lebih rendah dibandingkan dengan tanah
                        yang tanpa vegetasi.
                    </li>
                    <li>
                        Tipe tanah juga mempengaruhi suhu, semakin gelap tanah maka semakin
                        tinggi pula indeks suhunya, begitu juga sebaliknya.
                    </li>
                    <li>
                        Sudut datangnya sinar matahari juga mempengaruhi suhu. Sudut
                        datangnya sinar matahari yang lurus, akan jauh lebih panas jika
                        dibandingkan dengan yang sudut datangnya matahari dari arah miring.
                    </li>
                </ol>
            </div>
        </>
    );
}
