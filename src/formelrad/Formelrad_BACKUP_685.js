import { useState } from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: "",
        message: ""
    });

    const [colors, setColors] = useState({
        u: "black",
        i: "black",
        r: "black",
        p: "black",
        message: "red"
    });

    function resetColors() {
        setColors(colors => ({ ...colors, u: "black", i: "black", r: "black", p: "black" }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        resetColors();
        if (values.u === "" && values.i === "") {
            /*calculate u and i */
<<<<<<< HEAD
            setValues(values => ({ ...values, u: Math.sqrt(values.p * values.r) }));
=======
            setValues(values => ({...values, u: Math.sqrt(values.p * values.r)}));
>>>>>>> FeatureFieldTextColor
        }
    };

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad" />
                </header>
                <form onSubmit={handleSubmit}>
                    <InputField
                        color={colors.u}
                        value={values.u}
                        label="Spannung"
                        handleChange={e => { setValues(values => ({ ...values, u: e.target.value })) }}
                    />
                    <InputField
                        color={colors.i}
                        value={values.i}
                        label="Stromstärke"
                        handleChange={e => { setValues(values => ({ ...values, i: e.target.value })) }}
                    />
                    <InputField
                        color={colors.r}
                        value={values.r}
                        label="Widerstand"
                        handleChange={e => { setValues(values => ({ ...values, r: e.target.value })) }}
                    />
                    <InputField
                        color={colors.p}
                        value={values.p}
                        label="Leistung"
                        handleChange={e => { setValues(values => ({ ...values, p: e.target.value })) }}
                    />
                    <InputField
                        color={colors.message}
                        value={values.message}
                        label="Message"
                        handleChange={e => { setValues(values => ({ ...values, message: e.target.value })) }}
                    />
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    );
}
