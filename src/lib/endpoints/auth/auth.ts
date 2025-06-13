import api from "../../helpers/axios.config"
import authServicesTypes from "./type"

const authService = {
    login: () => {
        return api.get<authServicesTypes>('/?results=1&nat=us')
    }
}

export default authService