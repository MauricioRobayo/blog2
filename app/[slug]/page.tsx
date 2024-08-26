import { CustomMDX } from "app/components/mdx";
import { baseUrl } from "app/sitemap";
import { getNotes } from "app/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let posts = getNotes();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getNotes().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, date } = post.metadata;
  return {
    title,
    openGraph: {
      title,
      type: "article",
      date,
      url: `${baseUrl}/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}

export default function Blog({ params }) {
  let post = getNotes().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Mauricio Robayo",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
