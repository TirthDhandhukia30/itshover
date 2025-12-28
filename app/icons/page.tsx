import { Metadata } from "next";
import IconsPageContent from "./icons-page-content";

export const metadata: Metadata = {
  title: "Animated icons | Its Hover",
  description: "Motion-first animated icons that moves with intent.",
};

export default function IconsPage() {
  return <IconsPageContent />;
}
