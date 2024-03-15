import Header from "@/components/Header";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div>index</div>
      <Header></Header>
      <Link href={"/about"}>about</Link>
    </>
  );
}
