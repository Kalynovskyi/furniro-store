import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    return <p>Product: {router.query.slug}</p>;
}
