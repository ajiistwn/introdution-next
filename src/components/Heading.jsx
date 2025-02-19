import { phudu } from "@/font";

export default function Heading({ children }) {
    return (
        <h1 className={`p text-2xl font-bold pb-3 ${phudu.className}`}>{children}</h1>
    );
}
