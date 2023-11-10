import './Konversi.css'

export default function Skala() {
    return (
        <>
            <h2>Skala Tetapan Termometer</h2>
            <div className='skala-tetapan'>
                <p>
                    Skala termometer seperti pada Gambar 1 di bawah ini, diperoleh
                    berdasarkan titik tetap atas dan titik tetap bawah.
                </p>
                <div className='skala-img'>
                    <img src="/images-views/SkalaTetapan.jpg" alt="" />
                    <img src="/images-views/SkalaTetapan2.webp" alt="" />
                </div>
                <p>
                    Titik tetap atas mengacu pada titik didik air, di mana setiap
                    termometer mempunyai nilai yang berbeda. Pada skala Celcius (°C) titip
                    didih air ditetapkan pada skala 100.{" "}
                </p>
                <p>
                    Pada Fahrenheit (°F), Kelvin (°K), Reamul (°R) dan Rankine (°Ra)
                    berturut-turut titik didih air ditetapkan pada skala 212, 373.15, 80
                    dan 671.67.
                </p>
                <p>
                    Adapun titik tetap bawah ditetapkan berdasarkan titik beku air dimana
                    Celcius, Fahrenheit, Kelvin, Reamul dan Rankine berturut-turut titik
                    beku air ditetapkan pada skala 0, 32, 273.15, 0 dan 491,67.
                </p>
                <p>
                    Skala antara titik tetap atas dan titik tetap bawah merupakan
                    interpolasi antara kedua titik tetap tersebut.
                </p>
                <p>
                    Sekedar catatan untuk satuan dalam Kelvin tidak menggunakan simbol
                    derajat (⁰) sebagai konsensus bahwa Kelvin adalah satuan suhu mutlak.
                </p>
            </div>
        </>
    );
}
