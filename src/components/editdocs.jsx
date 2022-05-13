import React from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function EditDocs() {
    let params = useParams();
    return (
        <div>
            <h1>EditDocs</h1>

            <ReactQuill />
        </div>
    )
}