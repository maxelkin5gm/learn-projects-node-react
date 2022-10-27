import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../store/hooks";
import {useEffect} from "react";

export const useIsAuth = () => {
    const navigate = useNavigate()
    const {user, isLoading} = useAppSelector(state => state.auth)

    useEffect(() => {
        if (!user && !isLoading) navigate('/login')
    }, [user, isLoading, navigate])

    return !(isLoading || !user);
}