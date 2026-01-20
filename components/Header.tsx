export default function Header() {
    return (
        <header className="border-b border-gray-800">
            <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">Leftover</div>
                <div className="flex items-center gap-3">
                    <span className="text-sm">Dashboard</span>
                    <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden border border-yellow-500">
                        {/* Placeholder for avatar based on screenshot */}
                        <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
                    </div>
                </div>
            </div>
        </header>
    );
}
