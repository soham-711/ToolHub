import { useState } from "react";
import { percentOf, whatPercent, percentChange, fmt } from "./logic";
import "./index.css";

function useNums(n: number) {
  const [v, setV] = useState<string[]>(Array(n).fill(""));
  const set = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((p) => p.map((x, j) => (j === i ? e.target.value : x)));
  const nums = v.map((x) => (x.trim() === "" ? NaN : Number(x)));
  const ready = nums.every((x) => !Number.isNaN(x));
  return { v, set, nums, ready };
}

function Field({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="pc-field" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function PercentageCalculator() {
  const a = useNums(2);
  const b = useNums(2);
  const c = useNums(2);

  return (
    <div className="pc">
      <section className="pc-card">
        <h2>What is X% of Y?</h2>
        <div className="pc-row">
          <Field
            id="a1"
            label="Percent (%)"
            value={a.v[0]}
            onChange={a.set(0)}
          />
          <Field id="a2" label="Of value" value={a.v[1]} onChange={a.set(1)} />
        </div>
        <output className="pc-result" aria-live="polite">
          {a.ready ? fmt(percentOf(a.nums[0], a.nums[1])) : "-"}
        </output>
      </section>

      <section className="pc-card">
        <h2>X is what % of Y?</h2>
        <div className="pc-row">
          <Field id="b1" label="Value (X)" value={b.v[0]} onChange={b.set(0)} />
          <Field id="b2" label="Total (Y)" value={b.v[1]} onChange={b.set(1)} />
        </div>
        <output className="pc-result" aria-live="polite">
          {b.ready ? `${fmt(whatPercent(b.nums[0], b.nums[1]))}%` : "-"}
        </output>
      </section>

      <section className="pc-card">
        <h2>Percentage change</h2>
        <div className="pc-row">
          <Field id="c1" label="From" value={c.v[0]} onChange={c.set(0)} />
          <Field id="c2" label="To" value={c.v[1]} onChange={c.set(1)} />
        </div>
        <output className="pc-result" aria-live="polite">
          {c.ready ? `${fmt(percentChange(c.nums[0], c.nums[1]))}%` : "-"}
        </output>
      </section>
    </div>
  );
}

export default PercentageCalculator;
