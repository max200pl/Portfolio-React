import { useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { UserContext } from "../../../context/user-context";
import { getAuthGoole, TypeActionAuth } from '../../api/auth.api';
import s from "./ButtonAuthGoole.module.scss";

const ButtonAuthGoole = ({ text, typeAction }: { text?: string, typeAction: TypeActionAuth }) => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);


    const googleLoginHandler = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            try {
                const authGooleResponse = await getAuthGoole(typeAction, codeResponse);
                userCtx.authUser(authGooleResponse.user);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        },
        onError: (error) => console.log("Login with Goole Failed:", error),
    });

    return (
        <GoogleLoginButton
            className={`${s["form_control"]} ${s["form_control__login"]}`}
            onClick={() => googleLoginHandler()}
            text={"Google"}
            align="center"
        />
    );
};

export default ButtonAuthGoole;
