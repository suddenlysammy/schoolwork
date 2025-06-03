import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Menue } from "../components/Menue.tsx";

export default function Home() {
  const count = useSignal(26);
  return (
    <Menue></Menue>
  );
}
