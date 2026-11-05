import { useRef, useState } from "react";
import { errorToast } from "../../utils/toast";
import ImagePreview from "../helper/ImagePreview";
import { Image, Send } from "lucide-react";

function MessageInput({ sendMessages }) {
  const [text, setText] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const fileInputRef = useRef(null);

  async function handleImageUpload(event) {
    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      errorToast("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleRemoveImage() {
    setPreviewImg(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handlePostMessage(event) {
    event.preventDefault();

    if (!text.trim() && !previewImg) return;

    const { success, message } = await sendMessages({
      text: text.trim(),
      image: previewImg,
    });
    if (!success) {
      errorToast(message);
      return;
    }

    setText("");
    setPreviewImg(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
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
              className="hidden"
            />
            <button
              type="button"
              className={`hidden sm:flex btn btn-circle ${previewImg ? "text-emerald-500" : "text-zinc-400"}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Image size={20} />
            </button>
          </div>
          <button
            type="submit"
            className="btn  btn-circle"
            disabled={!text.trim() && !previewImg}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
