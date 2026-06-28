import BrowseEbooks from "./BrowseEbooks";

export const metadata = {
  title: "Fable | Browse Ebooks",
  description:
    "Discover thousands of ebooks from talented writers around the world.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <BrowseEbooks />
    </div>
  );
}
