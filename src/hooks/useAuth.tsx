'use client';
import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [keycloak, setKeycloak] = useState<Keycloak | null>(null);

    useEffect(() => {
        const client = new Keycloak({
            url: "https://keycloak.nethmin-dev.online",
            realm: "my_realm",
            clientId: "my_app",
        });

        client.init({ onLoad: "check-sso" }).then((auth) => {
            setKeycloak(client);
            setIsLogin(auth);
        });

    }, []);

    const login = () => {
        if (keycloak) {
            keycloak.login();
        }
    };

    const logout = () => {
        if (keycloak) {
            keycloak.logout();
        }
    };

    return { isLogin, login, logout };
};

export default useAuth;

