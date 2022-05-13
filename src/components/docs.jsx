import React, { useState } from 'react';
import ModalComponent from './modal';

export default function Docs({
    database
}) {
    const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const addData = () => {
        
    }
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
                title={title}
                setTitle={setTitle}
                onClick={addData}
            />
        </div>
    )
}