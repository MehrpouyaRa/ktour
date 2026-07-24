export interface User {
    id: string
    email: string
}

interface authServicesTypes {
    user: User;
    tokens: {
        access_token: string
    };
}

export default authServicesTypes