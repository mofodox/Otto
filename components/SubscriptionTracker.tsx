"use client";

import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import SubscriptionForm from './SubscriptionForm';
import { Trash2, Pencil } from 'lucide-react';
import Modal from './Modal';

interface Subscription {
    id: string;
    name: string;
    cost: number;
    description: string;
    date: string; // Storing date as YYYY-MM-DD string
}

export default function SubscriptionTracker() {
    const [subscriptions, setSubscriptions] = useLocalStorage<Subscription[]>('subscriptions', []);
    const [income, setIncome] = useLocalStorage<number | null>('income', null);
    const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
    const [tempIncome, setTempIncome] = useState('');
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSaveSubscription = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !cost || !date || !description) return;

        const costNum = parseFloat(cost);
        if (isNaN(costNum) || costNum <= 0) return;

        if (editingId) {
            // Edit existing subscription
            setSubscriptions(subscriptions.map(sub =>
                sub.id === editingId
                    ? { ...sub, name, cost: costNum, description, date }
                    : sub
            ));
        } else {
            // Add new subscription
            const newSubscription: Subscription = {
                id: crypto.randomUUID(),
                name,
                cost: costNum,
                description,
                date,
            };
            setSubscriptions([...subscriptions, newSubscription]);
        }

        resetForm();
    };

    const handleEdit = (sub: Subscription) => {
        setEditingId(sub.id);
        setName(sub.name);
        setCost(sub.cost.toString());
        setDescription(sub.description);
        setDate(sub.date);
        setIsFormVisible(true);
    };

    const resetForm = () => {
        setName('');
        setCost('');
        setDescription('');
        setDate('');
        setEditingId(null);
        setIsFormVisible(false);
    };

    const handleDelete = (id: string) => {
        setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    };

    const handleSaveIncome = (e: React.FormEvent) => {
        e.preventDefault();
        const incomeNum = parseFloat(tempIncome);
        if (isNaN(incomeNum) || incomeNum < 0) return;
        setIncome(incomeNum);
        setIsIncomeModalOpen(false);
        setTempIncome('');
    };

    const totalCost = subscriptions.reduce((acc, sub) => acc + sub.cost, 0);

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            {/* Header */}
            <header className="border-b border-gray-800 py-4 px-6 flex justify-between items-center">
                <div className="text-xl font-bold">Leftover</div>
                <div className="flex items-center gap-3">
                    <span className="text-sm">Dashboard</span>
                    <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden border border-yellow-500">
                        {/* Placeholder for avatar based on screenshot */}
                        <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-8">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
                        {income === null ? (
                            <p className="text-xl text-gray-300">
                                It looks like you haven&apos;t setup your income. <button onClick={() => setIsIncomeModalOpen(true)} className="text-yellow-400 font-bold underline hover:text-yellow-300">Add your income</button> to complete the setup.
                            </p>
                        ) : (
                            <p className="text-xl">
                                You have <button
                                    onClick={() => {
                                        setTempIncome(income.toString());
                                        setIsIncomeModalOpen(true);
                                    }}
                                    className="cursor-pointer text-yellow-400 font-bold hover:underline hover:text-yellow-300 transition-colors"
                                    title="Click to update income"
                                >
                                    S${(income - totalCost).toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </button> to spend.
                            </p>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            resetForm();
                            setIsFormVisible(true);
                        }}
                        className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                        Add Bill
                    </button>
                </div>

                <Modal
                    isOpen={isFormVisible}
                    onClose={() => setIsFormVisible(false)}
                    title={editingId ? "Edit Subscription" : "Add New Subscription"}
                >
                    <SubscriptionForm
                        name={name}
                        setName={setName}
                        cost={cost}
                        setCost={setCost}
                        description={description}
                        setDescription={setDescription}
                        date={date}
                        setDate={setDate}
                        onSubmit={handleSaveSubscription}
                        submitLabel={editingId ? "Update Bill" : "Add Bill"}
                    />
                </Modal>

                <Modal
                    isOpen={isIncomeModalOpen}
                    onClose={() => setIsIncomeModalOpen(false)}
                    title="Set Monthly Income"
                >
                    <form onSubmit={handleSaveIncome} className="space-y-4">
                        <div>
                            <label htmlFor="income" className="block text-sm font-medium text-gray-400 mb-1">
                                Monthly Income (SGD)
                            </label>
                            <input
                                id="income"
                                type="number"
                                step="0.01"
                                required
                                value={tempIncome}
                                onChange={(e) => setTempIncome(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                                placeholder="e.g. 5000.00"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
                        >
                            Save Income
                        </button>
                    </form>
                </Modal>

                {/* Table */}
                <div className="mt-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-800 text-gray-400 text-sm uppercase">
                                    <th className="py-4 font-semibold">Name</th>
                                    <th className="py-4 font-semibold">Cost</th>
                                    <th className="py-4 font-semibold">Description</th>
                                    <th className="py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {subscriptions.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="py-8 text-center text-gray-500">
                                            No bills to show. Add one to get started!
                                        </td>
                                    </tr>
                                ) : (
                                    subscriptions.map((sub) => (
                                        <tr key={sub.id} className="group hover:bg-gray-900/50 transition-colors">
                                            <td className="py-4 font-medium">{sub.name}</td>
                                            <td className="py-4">SGD {sub.cost.toFixed(2)}</td>
                                            <td className="py-4 text-gray-400">{sub.description}</td>
                                            <td className="py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => handleEdit(sub)}
                                                        className="cursor-pointer text-gray-500 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                                                        aria-label="Edit subscription"
                                                    >
                                                        <Pencil size={20} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(sub.id)}
                                                        className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-800"
                                                        aria-label="Delete subscription"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                {/* Total Row */}
                                {subscriptions.length > 0 && (
                                    <tr className="border-t border-gray-700">
                                        <td className="py-4 font-bold" colSpan={1}>Total:</td>
                                        <td className="py-4 font-bold">SGD {totalCost.toFixed(2)}</td>
                                        <td colSpan={2}></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <footer className="fixed bottom-4 left-0 w-full text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} designed & developed.
            </footer>
        </div>
    );
}
