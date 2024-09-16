"use client";
import { useRouter } from "next/navigation";

const Button = ({ slug, children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/portfolio/${slug}`);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
