import { Button as HeadlessButton } from '@headlessui/react';

function Button({ children }: { children: React.ReactNode }) {
  return (
    <HeadlessButton className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
      {children}
    </HeadlessButton>
  );
}

export default Button;
