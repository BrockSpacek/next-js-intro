import UsernameForm from "@/components/UsernameForm";
import { redirect } from "next/navigation";


export default function Home() {
  redirect("./set-name");

}
