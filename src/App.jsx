import Header from "./Components/Header";
import Letters from "./Components/Letters";
import Man from "./Components/Man";
import TheWord from "./Components/TheWord";

export default function App() {
  return (
    <div className="container mb-10">
      <Header />
      <div className="flex box flex-col md:flex-row border-y-2 py-4 h-[70vh] md:h-[450px] border-slate-200 my-2  gap-4 flex-wrap">
        <Man />
        <Letters />
      </div>
      <TheWord />
    </div>
  );
}
