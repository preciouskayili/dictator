import { SVGProps } from "react";

export default function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m21.354 20.646-4.01-4.009a8.533 8.533 0 1 0-.707.707l4.009 4.01a.5.5 0 0 0 .708-.708ZM3.5 11a7.5 7.5 0 1 1 7.5 7.5A7.509 7.509 0 0 1 3.5 11Z" />
    </svg>
  );
}
