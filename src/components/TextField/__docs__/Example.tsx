import React, { useState } from 'react'
import TextField from '../TextField'

const Example = () => {
    const [text, settext] = useState('')
    return (
        <div>
            <TextField label={'Demo'} value={text} onChange={(e: any) => settext(e.target.value)} required />
        </div>
    )
}

export default Example
