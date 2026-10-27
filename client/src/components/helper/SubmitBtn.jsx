import { Loader2 } from "lucide-react";

function SubmitBtn({ disabled, title, loading }) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-full"
      disabled={disabled}
    >
      {loading ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          loading...
        </>
      ) : (
        title
      )}
    </button>
  );
}

export default SubmitBtn;
