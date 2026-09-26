import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    "cloud-infrastructure",
    "core-business",
    "data-layer",
    "digital-experience",
    "growth-applications",
  ].map((slug) => ({ slug }));
}

export default async function LegacySolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/product/solutions/${slug}`);
}
