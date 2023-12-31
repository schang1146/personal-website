import dynamic from "next/dynamic";

const DynamicThreeBox = dynamic(() => import("../components/three-box"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <DynamicThreeBox></DynamicThreeBox>
      <p className="text-xl text-center">hello, world!</p>
    </>
  );
}
