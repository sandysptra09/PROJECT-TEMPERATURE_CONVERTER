import "./MacamAlat.css";
import AlatPengukurSuhu from "./sub-components/AlatPengukurSuhu";
import Termometer from "./sub-components/Termometer";

export default function MacamAlat() {
    return (
        <>
            <h2>Macam Alat Pengukur Suhu</h2>
            <div className="img-macam-alat">
                <img
                    src="../../public/images/AlatPengukur.jpeg"
                    alt="Macam-macam alat pengukur suhu"
                />
                <img
                    src="../../public/images/AlatPengukur2.jpeg"
                    alt="Macam-macam alat pengukur suhu"
                />
            </div>
            <div className="alat-pengukur">
                <p>
                    Manusia memiliki tangan yang bisa merasakan suhu. Namun perasaan
                    dingin dan panas suatu benda yang bisa dirasakan oleh masing-masing
                    manusia tidaklah sama. Ukuran tersebut hanyalah ukuran kualitatif atas
                    suhu suatu benda.
                </p>
                <p>
                    Maka untuk menyatakan suhu dengan sama antara satu orang dengan orang
                    lainnya, dibutuhkan alat pengukur suhu yang dapat menyatakan suhu
                    secara kuantitatif. Alat bantu pengukur suhu ini dinamakan dengan
                    termometer. Dengan alat-alat yang akan disebutkan berikut, hasil
                    pengukuran suhu yang dilakukan akan memberikan persepsi yang sama pada
                    semua orang.
                </p>
            </div>
            <AlatPengukurSuhu />
            <p className="alat-pengukur">
                Dalam menyatakan sebuah suhu, alat yang dipakai atau termometer ini juga
                bisa dibagi menjadi dua jenis, yaitu termometer padat dan termometer
                cair. Termometer zat padat menggunakan sifat benda padat sebagai bahan
                pembuat, sementara termometer zat cair memakai benda cair atau alkohol
                sebagai bahan pembuatnya. Berikut adalah penjelasannya:
            </p>
            <Termometer/>
        </>
    );
}
