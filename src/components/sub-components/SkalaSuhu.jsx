import './SkalaSuhu.css'

export default function SkalaSuhu() {
    return (
        <>
            <div className="skala-suhu">
                <h3>1. Celcius (C)</h3>
                <p>
                    Celcius ini merupakan skala suhu yang paling sering dipakai, baik di
                    Indonesia maupun di luar negeri. Celcius memiliki satuan derajat C.
                    Dalam melakukan perbandingan antara dingin dan panas, skala Celcius
                    air membeku pada suhu 0 derajat celcius. Sementara skala celcius pada
                    air mendidih adalah 100 derajat celcius.
                </p>

                <h3>2. Farenheit (F)</h3>
                <p>
                    Kedua adalah Fahrenheit atau dikenal dengan huruf F saja. Dilihat dari
                    Lumen Learning, Fahrenheit ini merupakan skala pengukur suhu yang
                    paling banyak dipakai di negara Amerika Serikat. Skala Fahrenheit
                    mempunyai satuan derajat Farenheit. Adapun di skala ini, air mendidih
                    ada pada suhu 212 derajat F, sementara air membeku ada pada skala 32
                    derajat Fahrenheit.
                </p>

                <h3>3. Kelvin (K)</h3>
                <p>
                    Skala pengukuran suhu selanjutnya adalah Kelvin. Skala inilah yang
                    diketahui tidak memiliki derajat. Satuan pada skala ini adalah Kelvin
                    (K). Sebagai perbandingan, dalam skala ini air mendidih pada suhu
                    373,15 Kelvin, dan air membeku pada suhu 273,15 Kelvin.
                </p>

                <h3>4. Reamur (R)</h3>
                <p>
                    Terakhir ada Reamur, yaitu skala pengukur suhu yang ditemukan oleh
                    Antoine Ferchault de Reamur pada tahun 1730. Skala Reamur ini
                    mempunyai satuan derajat Reamur. Pada skala ini, suhu untuk air
                    mendidih yaitu sebesar 80 derajat Reamur, dan suhu pada air membeku
                    sebesar 0 derajat Reamur.
                </p>
                <p>Apabila diambil kesimpulan, maka perbandingan antara keempat suhu di atas adalah sebagai berikut:</p>
                <p>C : R : F : K = 100 : 80 : 180  : 100</p>
                <p>C : R : F : K = 5 : 4 : 9 : 5</p>
            </div>
            
        </>
    );
}
