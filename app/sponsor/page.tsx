import { Metadata } from "next";
import SponsorContent from "./sponsor-content";

export const metadata: Metadata = {
  title: "Sponsor and Support | Its Hover",
  description: "Its Hover is completely open-sourced and free to use.",
};

export default function SponsorPage() {
  return <SponsorContent />;
}
