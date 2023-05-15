import React, { useEffect, useState } from "react";
import s from "./LogIn.module.scss";

export default function LogIn(props) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        return () => { // вызывается только после изменения зависимостей 
        }
    }, [enteredPassword])


    /*  useEffect(() => {
         const identifier = setTimeout(() => {
             //* валидация только после определенного времени (Debouncing)
             //* постоянная очистка таймера если пользователь не перестал печатать 
             console.log("Checking from validity!") //* когда компонента только создалась вызывается один раз 
             setFormIsValid(
                 enteredEmail.includes('@') && enteredPassword.trim().length > 6
             );
         }, 500);
 
         return () => { // cleanup function
             //* запускается перед запуском основной функции постоянно  
             //* и когда компонента размонтируется (unmantling --- removed) 
             console.log("CLEANUP");
             clearTimeout(identifier) //* постоянно очищаем наш интервал  
         }
     }, [enteredEmail, enteredPassword]) // если зависимости обновились тогда вызываем функцию повторно 
  */

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <div className={`
                    ${s.form__row} 
                    ${emailIsValid === false ? s.invalid : ""}
                 `}
            >
                <input
                    className={s.form__email}
                    type="email"
                    name="email"
                    onChange={emailChangeHandler}
                    placeholder="Your email"
                    onBlur={validateEmailHandler}
                />
            </div>

            <div className={`
                    ${s.form__row} 
                    ${passwordIsValid === false ? s.invalid : ""}
                `}
            >
                <input
                    className={s.form__password}
                    type="password"
                    name="password"
                    placeholder="Your password"
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
            </div>

            <input type="submit" disabled={!formIsValid} />
        </form>
    );
}