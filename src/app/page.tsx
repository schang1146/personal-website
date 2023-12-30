import dynamic from "next/dynamic";

const DynamicThreeBox = dynamic(() => import("../components/three-box"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <DynamicThreeBox></DynamicThreeBox>
      hello, world!
    </>
  );
}
