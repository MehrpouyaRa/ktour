import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './style.module.scss'

interface props {
    children: ReactNode
    loading?: boolean
}

function AppButton({ children, loading, ...props }: props & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button disabled={loading} {...props} className={styles.button}>
            {loading ? 'Loading ...' : children}
        </button>
    )
}

export default AppButton