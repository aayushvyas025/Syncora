import { Suspense } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/auth/authStore";
import content from "../../constant/content/content";

const { title, subTitle, description, btn } = content.notFound;
function NotFound() {
  const { authUser } = useAuthStore();
  return (
    <Suspense>
      <div class="h-screen flex flex-col items-center justify-center text-sm max-md:px-4">
        <h1 class="text-8xl md:text-9xl font-bold text-primary-500">{title}</h1>
        <div class="h-1 w-16 rounded bg-indigo-500 my-5 md:my-7"></div>
        <p class="text-2xl md:text-3xl font-bold text-secondary-800">
          {subTitle}
        </p>
        <p class="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
          {description}
        </p>
        <div class="flex items-center gap-4 mt-6">
          <Link
            to={authUser ? "/" : "/auth"}
            class="bg-gray-800 hover:bg-black px-7 py-2.5 text-white rounded-md active:scale-95 transition-all"
          >
            {authUser ? btn.home : btn.auth}
          </Link>
        </div>
      </div>
    </Suspense>
  );
}

export default NotFound;
