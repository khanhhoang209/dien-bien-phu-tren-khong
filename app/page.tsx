import { Tabs } from "@/components/tabs";
import { Footer } from "@/components/footer";
import HistoryChat from "@/components/HistoryChat";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Tabs />
      <Footer />
      <HistoryChat />
    </main>
  );
}
