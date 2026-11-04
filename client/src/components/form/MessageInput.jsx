import { useRef, useState } from "react";
import { errorToast } from "../../utils/toast";

function MessageInput({sendMessages, user}) {
  const [text, setText] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const fileInputRef = useRef(null);
 

  async function handleImageUpload(event) {}

  function removeImage() {
    setPreviewImg(null);
  }

  async function handlePostMessage() {
    const {success, message} = await sendMessages(user._id);
    if(!success) {
        errorToast()
    }
  }
  return <div className="p-4 w-full">

  </div>;
}

export default MessageInput;
