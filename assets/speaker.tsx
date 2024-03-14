import { SVGProps } from "react";

export default function Speaker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 7h1.767a2 2 0 0 0 1.293-.474L10.251 3.4A1.67 1.67 0 0 1 13 4.673v14.654a1.67 1.67 0 0 1-2.75 1.273l-3.69-3.127A2 2 0 0 0 5.267 17H3.5A1.5 1.5 0 0 1 2 15.5v-7A1.5 1.5 0 0 1 3.5 7Zm13.267 9.77a6.731 6.731 0 0 0 0-9.542.75.75 0 1 0-1.059 1.062 5.232 5.232 0 0 1 0 7.418.75.75 0 1 0 1.059 1.062Zm2.3 3.049a.75.75 0 0 1-.529-1.281 9.239 9.239 0 0 0 0-13.078A.75.75 0 1 1 19.6 4.4a10.738 10.738 0 0 1 0 15.2.749.749 0 0 1-.533.22Z" />
    </svg>
  );
}
