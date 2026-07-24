import LoginPage from '@/component/pages/login/LoginPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ورود",
};

function Page() {
    return <LoginPage />
}

export default Page