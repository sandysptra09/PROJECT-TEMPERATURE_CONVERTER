import React, { useState } from 'react';


export default function Calculator() {
    // state dan fungsi
    const [inputSuhu, setInputSuhu] = useState('')
    const [selectedSkala, setSelectedSkala] = useState('Celcius')
    const [hasil, setHasil] = useState({
        Celcius: '',
        Kelvin: '',
        Fahrenheit: '',
        Reamur: '',
    });

    // handle change
    const handleInputChange = (e) => {
        setInputSuhu(e.target.value);
        konversiSuhu(inputSuhu, e.target.value)
    }

    // handle change
    const handleSelectChange = (e) => {
        setSelectedSkala(e.target.value);
        konversiSuhu(inputSuhu, e.target.value);
    }

    // fungsi kondisi dan rumus suhu
    const konversiSuhu = (nilai, skala) => {
        if (!nilai || isNaN(nilai)) {
            setHasil({
                Celcius: '',
                Kelvin: '',
                Fahrenheit: '',
                Reamur: ''
            });
            return;
        }

        const suhuCelcius = parseFloat(nilai);

        let hasilKonversi = {
            Celcius: suhuCelcius.toFixed(1),
            Kelvin: '',
            Fahrenheit: '',
            Reamur: ''
        };

        if (skala === 'Celcius') {
            hasilKonversi.Kelvin = (suhuCelcius + 273.15).toFixed(1);
            hasilKonversi.Fahrenheit = ((suhuCelcius * 9 / 5) + 32).toFixed(1);
            hasilKonversi.Reamur = (suhuCelcius * 4 / 5).toFixed(1);
        } else if (skala === 'Kelvin') {
            hasilKonversi.Celcius = (suhuCelcius - 273.15).toFixed(1);
            hasilKonversi.Fahrenheit = ((suhuCelcius - 273.15) * 9 / 5 + 32).toFixed(1);
            hasilKonversi.Reamur = ((suhuCelcius - 273.15) * 4 / 5).toFixed(1);
        } else if (skala === 'Fahrenheit') {
            hasilKonversi.Celcius = ((suhuCelcius - 32) * 5 / 9).toFixed(1);
            hasilKonversi.Kelvin = ((suhuCelcius - 32) * 5 / 9 + 273.15).toFixed(1);
            hasilKonversi.Reamur = ((suhuCelcius - 32) * 5 / 9 * 4 / 5).toFixed(1);
        } else if (skala === 'Reamur') {
            hasilKonversi.Celcius = (suhuCelcius * 5 / 4).toFixed(1);
            hasilKonversi.Kelvin = (suhuCelcius * 5 / 4 + 273.15).toFixed(1);
            hasilKonversi.Fahrenheit = ((suhuCelcius * 5 / 4 * 9 / 5) + 32).toFixed(1);
        }

        setHasil(hasilKonversi);
    }


    return (
        <div className="container-calculator">
            <div className="calculator">
                <fieldset>
                    <legend>
                        <h2>Konversi Suhu</h2>
                    </legend>
                    <div className="label">
                        <label>Masukan Nilai Suhu</label>
                        <input type="number" value={inputSuhu} onChange={handleInputChange}></input>
                    </div>
                    <div className="skala">
                        <label>Pilih Skala Satuannya</label>
                        <select value={selectedSkala} onChange={handleSelectChange}>
                            <option value='Celcius'>Celcius (°C)</option>
                            <option value='Kelvin'>Kelvin (K)</option>
                            <option value='Fahrenheit'>Fahrenheit (°F)</option>
                            <option value='Reamur'>Reamur (°R)</option>
                        </select>
                    </div>

                    <div className="title-hasil">
                        <h3>Hasil :</h3>
                    </div>

                    {/* Hasil */}
                    <div className='hitung-skala-suhu'>
                        {Object.keys(hasil).map((skala, index) => (
                            <div key={index} className={`box-${skala.toLowerCase()}`}>
                                <label>{skala}</label>
                                <div className='box-hasil'>
                                    <span>{inputSuhu} ° {selectedSkala} = </span>
                                    <span className='hasil'>{hasil[skala]} ° {skala}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="hitung-skala-suhu">
                        <div className="box-celcius">
                            <label>Celcius (°C)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                <span className="hasil">36,0 °C</span>
                            </div>
                        </div>

                        <div className="box-kelvin">
                            <label>Kelvin  (°K)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                <span className="hasil">36,0 °K</span>
                            </div>
                        </div>

                        <div className="box-fahrenheit">
                            <label>Reamur  (°R)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                <span className="hasil">36,0 °R</span>
                            </div>
                        </div>

                        <div className="box-reamur">
                            <label>Fahrenheit  (°F)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                <span className="hasil">36,0 °F</span>
                            </div>
                        </div>
                    </div> */}

                    <div className="reset">
                        <button>Hapus</button>
                    </div>

                </fieldset>
            </div>
        </div>
    );
}
