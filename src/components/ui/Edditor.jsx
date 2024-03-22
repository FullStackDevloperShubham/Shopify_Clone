// pages/index.js
'use client'
import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw, RichUtils } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const IndexPage = () => {
    const [editorState, setEditorState] = useState(() => {
        // Initialize editorState
        return EditorState.createEmpty();
    });

    const handleEditorChange = (state) => {
        setEditorState(state);
    };

    const toggleInlineStyle = (inlineStyle) => {
        // Toggle inline style
        handleEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    return (
        // <div className=" absolute container mx-auto py-8" style={{ marginLeft: '20em' }}>
        //     <h1 className="text-3xl font-bold mb-4">Editor Example</h1>
        //     <div className="w-300 mx-auto ml-400">
        //         <EditorComponent editorState={editorState} onEditorStateChange={handleEditorChange} />
        //     </div>
        // </div>

        <div className="absolute container  mt-10 mx-auto py-8 border border-gray-300 shadow-lg" style={{ marginLeft: '20em' }}>
            <h1 className="text-3xl  mb-4 " style={{ textAlign: 'center', fontFamily: 'cursive' }}>Edditor</h1>
            <div className="w-300 mx-auto ml-400">
                <EditorComponent editorState={editorState} onEditorStateChange={handleEditorChange} />
            </div>
        </div>

    );
};

const EditorComponent = ({ editorState, onEditorStateChange }) => {
    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="bg-gray-200"
            wrapperClassName="mt-4"
            editorClassName="px-4 py-2 border border-red-300 "
        />
    );
};

export default IndexPage;
















// ###########Another edditor
// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'

// const Tiptap = () => {
//     const editor = useEditor({
//         extensions: [
//             StarterKit,
//         ],
//         content: '<p>Hello World! 🌎️</p>',
//     })

//     return (
//         <EditorContent editor={editor} />
//     )
// }

// export default Tiptap


