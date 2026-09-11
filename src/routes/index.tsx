import { createFileRoute } from "@tanstack/react-router";
import { Book } from "@/components/book/Book";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ek Chhoti Si Kahaani — A Handmade Keepsake Book" },
      {
        name: "description",
        content:
          "एक छोटी सी कहानी — a handmade Indian memory journal you can turn page by page. Four months, a few conversations, many little memories.",
      },
      { property: "og:title", content: "Ek Chhoti Si Kahaani — A Handmade Keepsake Book" },
      {
        property: "og:description",
        content:
          "A page-turning keepsake journal of little memories, made on warm ivory handmade paper.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 py-10">
      <h1 className="sr-only">Ek Chhoti Si Kahaani — एक छोटी सी कहानी</h1>
      <Book />
    </main>
  );
}
