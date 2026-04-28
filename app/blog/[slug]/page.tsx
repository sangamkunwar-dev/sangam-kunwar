import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params }: any) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: () => cookieStore }
  );

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) return notFound();

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.created_at}</p>

      <div className="prose">{post.content}</div>
    </div>
  );
}