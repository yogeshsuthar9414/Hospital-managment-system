import React, { useEffect, useRef, useState } from 'react'
import { Editor, EditorState, RichUtils, DraftHandleValue, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
import { useDropzone } from "react-dropzone"; // ye bhi rkhna
// import { Button } from 'antd';
import { Attachment, Bold, Italic, Underline, Xmark } from 'iconoir-react';
import { stateToHTML } from "draft-js-export-html"; // ye rkhana thik kya kaam krta h text editor h ok

interface textEditorProps {
    setFieldVal?: any;
    value?: any;
    name?: string;
    attachments: File[];
    setAttachments: any;
}

const TextEditor: React.FC<textEditorProps> = ({ setFieldVal, value, name, attachments, setAttachments }) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editorRef = useRef<Editor | null>(null);

    // Handle text formatting commands
    const handleKeyCommand = (
        command: string
    ): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    const toggleInlineStyle = (style: string): void => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    // Handle file attachments
    const onDrop = (acceptedFiles: File[]): void => {
        setAttachments([...attachments, ...acceptedFiles]);
    };
    const { getRootProps, getInputProps, open } = useDropzone({
        noClick: true, // Prevent the default click behavior
        noKeyboard: true, // Prevent keyboard opening
        onDrop: onDrop,
    });

    const removeAttachment = (index: number): void => {
        const newAttachments = attachments.filter((_, i) => i !== index);
        setAttachments(newAttachments);
    };

    useEffect(() => {
        const contentState = editorState.getCurrentContent();
        const html = stateToHTML(contentState);
        setFieldVal(name, html)
    }, [editorState])

    return (
        <div>
            <div
                className='mt-3 border text-[#0f0f12bf] rounded-[5px] border-solid border-[#dee2e6] min-h-[150px] max-h-[360px] overflow-auto cursor-text p-2'
                {...getRootProps()}
                onClick={() => editorRef.current?.focus()}
            >
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    handleKeyCommand={handleKeyCommand}
                    ref={editorRef}
                />
                {attachments.map((file, index) => (
                    <div
                        key={index}
                        className='flex items-center mt-3 p-2 bg-[#f5f5f5] rounded'
                    >
                        <p className='text-sm flex'>{file.name}</p>
                        <Xmark className='ms-auto' onClick={() => removeAttachment(index)} />
                    </div>
                ))}
            </div>

            <div className='flex gap-2 mt-2'>
                <div onClick={() => toggleInlineStyle("BOLD")}><Bold /></div>
                <div onClick={() => toggleInlineStyle("ITALIC")}><Italic /></div>
                <div onClick={() => toggleInlineStyle("UNDERLINE")}><Underline /></div>
                <input className='visiable-hidden' {...getInputProps()} />
                <div onClick={open}><Attachment /></div>
            </div>
        </div>
    )
}

export default TextEditor