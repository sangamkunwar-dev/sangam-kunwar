import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getPosts() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: () => cookieStore }
  );

  const { data } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid gap-6">
        {posts?.map((post: any) => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}