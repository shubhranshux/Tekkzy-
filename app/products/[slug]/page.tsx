import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    "ai-assistant",
    "analytics",
    "automation",
    "crm",
    "digital-marketing",
    "erp",
    "hr-suite",
    "inventory",
    "seo",
    "solutions",
    "whats-possible",
  ].map((slug) => ({ slug }));
}

export default async function LegacyProductDetailPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/product/${slug}`);
}
