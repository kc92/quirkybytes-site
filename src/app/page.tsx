import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the default era (Geocities - the golden age!)
  redirect("/era/geocities");
}
