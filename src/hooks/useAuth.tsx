'use client'
import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {

        const client = new Keycloak({
            url: "https://keycloak.nethmin-dev.online",
            realm: "my_realm",
            clientId: "my_app",
        });

        client.init({ onLoad: "login-required" }).then((auth) => {
            if (auth) {
                setIsLogin(true);
            }
        });

    }, []);

    return isLogin;
}

export default useAuth;
