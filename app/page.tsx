"use client";
import { useState } from "react";

export default function Home() {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input
            onChange={() => {
              setCheckBox(!checkBox);
            }}
            type="checkbox"
            checked={checkBox}
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
    </main>
  );
}
