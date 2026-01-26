import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the default era (The Dawn - where it all began)
  redirect("/era/dawn");
}
