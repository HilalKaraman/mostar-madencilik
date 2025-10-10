"use client";

export default function ContactTrigger({ onOpen }: { onOpen?: () => void }) {
	return (
		<button onClick={onOpen} className="rounded-md bg-gold-metallic dark:bg-gold-metallic text-gunmetal dark:text-gunmetal px-4 py-2 hover:bg-field-drab dark:hover:bg-field-drab transition-colors shadow-md font-semibold">İletişime Geç</button>
	);
}
