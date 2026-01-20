import Link from 'next/link';

export default function Header() {
    return (
        <header className="border-b border-gray-800">
            <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
                    Otto
                </Link>
                <div className="flex items-center gap-3">
                    <Link href="/about" className="text-sm hover:text-gray-300 transition-colors">
                        About
                    </Link>
                    <span className="text-sm text-gray-400 cursor-not-allowed">FAQs</span>
                </div>
            </div>
        </header>
    );
}
