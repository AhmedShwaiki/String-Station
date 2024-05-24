import Button from './ui/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-black">String Station</h1>
        <p>Welcome to String Station!</p>
        <Button>click me</Button>
      </div>
    </main>
  );
}
