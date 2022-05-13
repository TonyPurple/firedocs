import React, { useState } from 'react';
import Modale from './modal';

export default function Docs() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div className='docs-main'>
            <h1>Docs Clone</h1>

            <button
                className='add-docs'
                onClick={handleOpen}
            >
                Add a Document
            </button>

            <Modale
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}