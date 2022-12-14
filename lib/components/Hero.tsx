const heroText = {
  mainText: "CubeArtisan",
  subText: "build, analyze, and share cubes",
};

export default function Hero({
  mainText,
  subText,
  children,
}: {
  mainText: string;
  subText: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[15rem] w-full flex-col items-center justify-center bg-gradient-to-r from-transparent via-blue-300 to-transparent">
      <h1 className="mb-1 text-[2.5rem]">{mainText}</h1>
      <p className="text-md text-gray-600">{subText}</p>
      {children}
    </section>
  );
}
