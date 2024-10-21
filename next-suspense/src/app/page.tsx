import { Suspense } from "react";

async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>SlowComponent</div>;
}

export default function Home() {
  return (
    <div>
      <Header />
      <h2>Before SlowComponent</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
      <h2>After SlowComponent</h2>
    </div>
  );
}
