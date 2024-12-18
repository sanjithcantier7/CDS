import React, { useState } from 'react'
import Dialogue from '../Dialogue'

const Example = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(true)}>Open</button>
            <Dialogue open={open} label={undefined} message={undefined} onClickClose={()=>setOpen(false)} onClose={()=>setOpen(false)}/>
        </div>
    )
}

export default Example
