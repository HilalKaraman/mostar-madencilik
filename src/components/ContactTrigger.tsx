"use client";

export default function ContactTrigger({ onOpen }: { onOpen?: () => void }) {
	return (
		<button onClick={onOpen} className="rounded-md bg-corn text-tuna px-4 py-2">İletişime Geç</button>
	);
}
