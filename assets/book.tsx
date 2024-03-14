import { SVGProps } from "react";

export default function Book(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.5 2.5H7C4.71 2.5 3.5 3.71 3.5 6v12A3.314 3.314 0 0 0 7 21.5h11.5a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2ZM7 3.5h11.5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a3.505 3.505 0 0 0-2.5.937V6c0-1.729.771-2.5 2.5-2.5Zm11.5 17H7A2.3 2.3 0 0 1 4.5 18 2.3 2.3 0 0 1 7 15.5h11.5a1.978 1.978 0 0 0 1-.278V19.5a1 1 0 0 1-1 1Z" />
    </svg>
  );
}
