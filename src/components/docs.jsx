import React, { useState } from 'react';
import ModalComponent from './modal';

export default function Docs({
    database
}) {
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

            <ModalComponent
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}