import "./MacamSkala.css";
import SkalaSuhu from "./sub-components/SkalaSuhu";

export default function MacamSkala() {
    return (
        <>
            <h2>Macam Macam Skala Suhu</h2>
            <div className="img-skala">
                <img src="/images/SkalaSuhu.jpg" alt="Skala Suhu" />
                <img src="/images/SkalaSuhu2.jpg" alt="Skala Suhu" />
            </div>
            <div className="macam-skala">
                <p>
                    Nilai derajat sebuah suhu dapat diatur ke dalam empat jenis skala
                    suhu, yaitu Celsius (C), Farenheit (F), Reamur (R), dan Kelvin(K).
                    Adapun skala suhu akan didasarkan pada dua titik tepat, yaitu titik
                    tetap bawah dan titik tetap atas. Titik bawah menandakan titik beku,
                    sementara itu titik atas menunjukkan titik didih. Nah, kedua titik
                    tersebut, dalam setiap jenis skala suhu dinyatakan sebagai berikut:
                </p>
                <ul>
                    <li>
                        Skala suhu Celcius memiliki titik bawah 0 derajat Celcius, dan titik
                        atas sebesar 100 derajat Celcius.
                    </li>
                    <li>
                        Skala suhu Fahrenheit memiliki titik bawah sebesar 32 derajat
                        Fahrenheit dan memiliki titik atas sebesar 212 derajat Fahrenheit.
                    </li>
                    <li>
                        Adapun skala Reamur mempunyai titik bawah sebesar 0 derajat Reamur
                        dan titik atas sebesar 80 derajat Reamur.
                    </li>
                    <li>
                        Terakhir, skala Kelvin memiliki titik bawah sebesar 273 dan titik
                        atas sebesar 373.
                    </li>
                </ul>
                <p>
                    Perlu Anda ketahui bahwa skala suhu Kelvin (K) tidak menggunakan
                    derajat, namun menggunakan nol mutlak. Hal ini dapat diartikan bahwa
                    nol Kelvin memiliki makna bahwa tidak ada energi panas sama sekali
                    pada sebuah benda. Hal ini pula yang kemudian menjadikan Kelvin
                    sebagai skala suhu pada Satuan Internasional atau SI. Untuk mengetahui
                    lebih rinci tentang keempat skala tersebut, berikut penjelasannya:
                </p>
            </div>
            <SkalaSuhu/>
        </>
    );
}
