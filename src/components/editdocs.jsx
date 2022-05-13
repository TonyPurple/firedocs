import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    updateDoc,
    collection,
    doc,
    onSnapshot
} from 'firebase/firestore';
export default function EditDocs({
    database
}) {
    const collectionRef = collection(database, 'docsData')
    let params = useParams();
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = (value) => {
        setDocsDesc(value)
    }
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
            .then(() => {
                alert('Saved')
            })
            .catch(() => {
                alert('Cannot Save')
            })
        }, 1000)
        return () => clearTimeout(updateDocsData)
    }, [docsDesc])
    return (
        <div>
            <h1>EditDocs</h1>

            <ReactQuill
   value={docsDesc}
   onChange={getQuillData}
/>
        </div>
    )
}