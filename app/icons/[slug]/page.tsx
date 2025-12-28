import { Metadata } from "next";
import IconDetailContent from "./icon-detail-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} animated icon | Its Hover`,
    description: `Motion-first animated ${slug} icon that moves with intent.`,
  };
}

export default async function IconDetailPage({ params }: Props) {
  const { slug } = await params;
  return <IconDetailContent slug={slug} />;
}
