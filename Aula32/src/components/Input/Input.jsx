import style from "./Input.module.css";
export default function Input({ label, value, onChange, placeholder }) {
    return (
        <>
            <div className={style.container}>
                <label>{label}</label>
                <input
                    className={style.input}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}