import { Link } from "react-router-dom";

import Faktor from "./Faktor";
import MacamAlat from "./MacamAlat";
import MacamSkala from "./MacamSkala";
import "./Pengertian.css";

export default function Pengertian() {
    return (
        <div>
            <h1>Pengertian Suhu : Rumus, Faktor, Alat Ukur dan Skala</h1>

            <div className="container">
                <div>
                    <div className="pengertian">
                        <p>
                            <span>Apa itu pengertian suhu?</span> Setiap manusia dapat merasakan
                            panas dan dingin sebuah benda karena adanya suhu. Suhu benda yang
                            dingin dikatakan lebih rendah dibanding suhu benda yang panas.
                            Sebaliknya, jika benda tersebut panas, artinya memiliki suhu yang
                            lebih tinggi dari benda lain yang dingin.
                        </p>
                        <p>
                            Dari hal tersebut lah kita dapat mengenal bahwa suhu merupakan sebuah
                            besaran. Sebenarnya masih banyak hal lain yang perlu diketahui tentang
                            suhu. Sebab setiap hari kita kerap menemuinya dalam kehidupan
                            sehari-hari.
                        </p>
                    </div>
                    <h2 className="sub-judul">Pengertian Suhu Dari Berbagai Sumber</h2>
                    <div className="pengertian">
                        <p>
                            Dalam Kamus Besar Bahasa Indonesia (KBBI), suhu diartikan sebagai
                            ukuran kuantitatif dari temperatur, panas atau dingin, dan diukur
                            menggunakan termometer. Suhu menjadi besaran yang akan menyatakan
                            ukuran derajat dingin dan panas suatu benda. Selain bisa dinyatakan
                            secara kualitatif, suhu juga dapat dinyatakan secara kuantitatif
                            dengan satuan derajat tertentu.
                        </p>
                        <p>
                            Tri Cahyono (2007) dalam buku Penyehatan Udara menyatakan bahwa suhu
                            adalah keadaan panas dinginnya suatu udara. Daerah tropis memiliki
                            suhu udara yang tertinggi di muka bumi, dan semakin ke kutub, suhu
                            udaranya akan semakin rendah.
                        </p>
                        <p>
                            Lalu jika berdasarkan datarannya, dataran rendah cenderung memiliki
                            suhu yang lebih tinggi jika dibandingkan dengan dataran tinggi.
                            Semakin tinggi permukaan tanah, maka suhunya juga akan semakin rendah.
                            Seperti suhu dingin yang akan dirasakan menusuk tulang jika sedang
                            berada di gunung.
                        </p>
                        <p>
                            Kemudian dalam Encyclopedia Britannica juga disebutkan bahwa suhu
                            adalah ukuran panas atau dingin yang dinyatakan dengan skala
                            sembarang. Di mana skala tersebut menunjukkan bahwa suhu panas yang
                            memiliki energi tinggi akan mengalir ke suhu yang lebih rendah atau
                            dingin. Maka dari itu, suhu dapat dinyatakan pula menjadi ukuran
                            kualitatif sebuah benda. Suhu ini bisa diukur karena adanya energi
                            kinetik dalam suatu benda. Jadi, semakin besar energi kinetik suatu
                            benda, suhunya akan semakin tinggi.
                        </p>
                        <p>
                            Kemudian jika dilihat dari konteks penguapan, suhu juga sangat
                            berperan terhadap proses kimia di udara. Semakin tinggi suhu suatu
                            udara, maka penguapan airnya juga akan semakin tinggi, begitu juga
                            dengan uap air yang ditahan, dan hal tersebut juga mempercepat
                            terjadinya reaksi kimia di udara.
                        </p>
                        <p>
                            Sebaliknya, semakin rendah suhu udara, kemampuan menahan uap airnya
                            juga rendah, dan menyebabkan udara menjadi jenuh uap air. Akibatnya,
                            apabila udara sudah mencapai batas maksimum, maka kondensasi
                            pengembunan terjadi dan hujan pun akan turun.
                        </p>
                    </div>
                </div>
                <div className="daftar-isi">
                    <h3>Daftar Isi</h3>
                    <div>
                        <ol>
                            <li><a href="#Pengertian_suhu_dari_berbagai_sumber">Pengertian Suhu Dari Berbagai Sumber</a></li>
                            <li><a href="#Faktor_yang_mempengaruhi_suhu">Faktor Yang Mempengaruhi Suhu</a></li>
                            <li><a href="#Macam_alat_pengukur_suhu">Macam Alat Pengukur Suhu</a></li>
                            <ul>
                                <li><a href="">Termometer Klinis</a></li>
                                <li><a href="">Termometer Ruangan</a></li>
                                <li><a href="">Termometer Inframerah</a></li>
                                <li><a href="">Termometer Digital</a></li>
                                <li><a href="">Termometer Laboratorium</a></li>
                                <li><a href="">Termokopel</a></li>
                                <li><a href="">Termometer Zat Padat</a></li>
                                <li><a href="">Termometer Zat Cair</a></li>
                            </ul>
                            <li><a href="#Skala_suhu">Macam Skala Suhu</a></li>
                            <ul>
                                <li><a href="" >Celcius (C)</a></li>
                                <li><a href="" >Farenheit (F)</a></li>
                                <li><a href="" >Kelvin (K)</a></li>
                                <li><a href="" >Reamur (R)</a></li>
                            </ul>
                            <Link to='/konversi_suhu' className="title-konversi"><h3>Konversi Suhu</h3></Link>
                        </ol>
                    </div>
                </div>
            </div>
            <Faktor />
            <MacamAlat />
            <MacamSkala />
        </div>
    );
}
