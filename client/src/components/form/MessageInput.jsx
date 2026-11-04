import { useRef, useState } from 'react'

function MessageInput() {
    const [text, setText] = useState(''); 
    const [previewImg, setPreviewImg] = useState(null);
    const fileInputRef = useRef(null); 
  return (
    <div>MessageInput</div>
  )
}

export default MessageInput