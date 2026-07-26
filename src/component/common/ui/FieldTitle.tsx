import React from 'react'

function FieldTitle({ caption }: { caption: string }) {
    return <strong className='text-sm md:text-md md:mr-4'>{caption}</strong>
}

export default FieldTitle