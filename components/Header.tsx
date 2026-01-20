export default function Header() {
    return (
        <header className="border-b border-gray-800">
            <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">Otto</div>
                <div className="flex items-center gap-3">
                    <span className="text-sm">About</span>
                    <span className="text-sm">FAQs</span>
                </div>
            </div>
        </header>
    );
}
