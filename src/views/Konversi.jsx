import About from "./About";
import Calculator from "./Calculator";

export default function Konversi() {
    return (
        <div>
            <h1>Konversi Suhu</h1>
            <img src="/images-views/temperature.png" alt="Logo Konversi Suhu" />
            <Calculator/>
            
            <About/>
        </div>
    )
}