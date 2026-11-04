import { useRef, useState } from "react";
import { errorToast } from "../../utils/toast";
import ImagePreview from "../helper/ImagePreview";

function MessageInput({ sendMessages, user }) {
  const [text, setText] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const fileInputRef = useRef(null);

  async function handleImageUpload(event) {}

  function handleRemoveImage() {
    setPreviewImg(null);
  }

  async function handlePostMessage() {
    const { success, message } = await sendMessages(user._id);
    if (!success) {
      errorToast(message);
      return;
    }
  }
  return (
    <div className="p-4 w-full">
      {previewImg && (
        <ImagePreview
          imagePreview={previewImg}
          closePreview={handleRemoveImage}
        />
      )}
      <form onSubmit={handlePostMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              className="w-full input input-bordered rounded-lg input-sm sm:input-md"
              placeholder={"Type a message...."}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
