import React, { useState } from 'react'
import Dialogue from '../Dialogue'

const Example = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(true)}>Open</button>
            <Dialogue open={open} />
        </div>
    )
}

export default Example
