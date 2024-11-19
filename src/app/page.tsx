import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegAngry } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">X122 big 2 fail Hello World big 2</h1>
      <Button
      as={Link}
      href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegAngry size={20} />}
      >
        Click Me more
      </Button>
    </div>
  );
}
