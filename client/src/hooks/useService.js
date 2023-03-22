import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {
    const { user } = useContext(AuthContext)

    const service = serviceFactory(user.accessToken);

    return service;
};