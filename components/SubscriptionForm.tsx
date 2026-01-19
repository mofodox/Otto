"use client";

interface SubscriptionFormProps {
    name: string;
    setName: (name: string) => void;
    cost: string;
    setCost: (cost: string) => void;
    description: string;
    setDescription: (description: string) => void;
    date: string;
    setDate: (date: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    submitLabel?: string;
}

export default function SubscriptionForm({
    name,
    setName,
    cost,
    setCost,
    description,
    setDescription,
    date,
    setDate,
    onSubmit,
    submitLabel = "Add Bill",
}: SubscriptionFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4 mb-8">
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Netflix"
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-600"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-400 mb-1"
                >
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. Entertainment"
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-600"
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="cost"
                        className="block text-sm font-medium text-gray-400 mb-1"
                    >
                        Cost (SGD)
                    </label>
                    <input
                        type="number"
                        id="cost"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-600"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-400 mb-1"
                    >
                        First Payment
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all placeholder-gray-600"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                className="cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
                {submitLabel}
            </button>
        </form>
    );
}
