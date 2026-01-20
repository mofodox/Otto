import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <Header />

            <main className="max-w-4xl mx-auto p-8">
                <div className="max-w-2xl">
                    <h1 className="text-3xl font-bold mb-8">
                        Wondering where your money goes each month? Otto makes it simple.
                    </h1>

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            Enter your monthly earnings and expenses, and this intuitive app calculates your remaining disposable income.
                        </p>

                        <p>
                            You&apos;ll get a clear status indicator showing if your spending habits are safe, at risk, or too much.
                        </p>

                        <p>
                            Plus, Otto works completely offline from banking systems, keeping your financial data stored locally on your device.
                        </p>

                        <Link href="/" className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
