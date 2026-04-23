import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "./app/store";
import { decrement, increment, reset } from "./features/counter/counterSlice";

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-[953px] items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

        {/* Header Section */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Total Count
          </p>
          <h1 className="mt-2 text-7xl font-black tabular-nums text-slate-900 dark:text-white">
            {count}
          </h1>
        </div>

        {/* Main Controls */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-indigo-600 py-4 font-bold text-white transition-all hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            <span className="text-2xl">+</span>
            <span className="text-xs uppercase">Increase</span>
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-white border border-slate-200 py-4 font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-95 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <span className="text-2xl">−</span>
            <span className="text-xs uppercase">Decrease</span>
          </button>
        </div>

        {/* Reset Action */}
        <button
          onClick={() => dispatch(reset())}
          className="mt-4 w-full rounded-xl py-3 text-sm font-semibold text-slate-500 transition-colors hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400"
        >
          Reset Counter
        </button>

      </div>
    </div>
  );
}