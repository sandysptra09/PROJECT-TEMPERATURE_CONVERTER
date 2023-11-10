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
