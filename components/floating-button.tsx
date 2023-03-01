import Link from "next/link";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

function FloatingButton({ children, href }: FloatingButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-4 text-white shadow-xl hover:bg-orange-500 cursor-pointer transition-colors">
        {children}
      </a>
    </Link>
  );
}

export default FloatingButton;
