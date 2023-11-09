export default function Calculator() {
    return (
        <div className="container-calculator">
            <div className="calculator">
                <fieldset>
                    <legend>
                        <h2>Konversi Suhu</h2>
                    </legend>
                    <div className="label">
                        <label>Masukan Nilai Suhu</label>
                        <input type="number"></input>
                    </div>
                    <div className="skala">
                        <label>Pilih Skala Satuannya</label>
                        <select>
                            <option>Celcius (°C)</option>
                            <option>Kelvin (K)</option>
                            <option>Fahrenheit (°F)</option>
                            <option>Reamur (°R)</option>
                        </select>
                    </div>

                    <div className="hitung-skala-suhu">
                        <div className="box-celcius">
                            <label>Celcius (°C)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                {/*Output masih dummy */}
                                <span className="hasil">36,0 °C</span>
                            </div>
                        </div>

                        <div className="box-kelvin">
                            <label>Kelvin  (°K)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                {/*Output masih dummy */}
                                <span className="hasil">36,0 °K</span>
                            </div>
                        </div>

                        <div className="box-fahrenheit">
                            <label>Reamur  (°R)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                {/*Output masih dummy */}
                                <span className="hasil">36,0 °R</span>
                            </div>
                        </div>

                        <div className="box-reamur">
                            <label>Fahrenheit  (°F)</label>
                            <div className="box-hasil">
                                <span>36,0°C = </span>
                                {/*Output masih dummy */}
                                <span className="hasil">36,0 °F</span>
                            </div>
                        </div>
                    </div>

                    <div className="reset">
                        <button>Hapus</button>
                    </div>

                </fieldset>
            </div>
        </div>
    );
}
