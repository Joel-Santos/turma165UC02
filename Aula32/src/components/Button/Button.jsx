import style from "./Button.module.css";

export default function Button({ label, onClick, type="default" }) {
    return (
        <>
            <button
                className={`${style.button} ${style[type]}`}
                onClick={onClick}>
                    {label}
                </button>
        </>
    )
}