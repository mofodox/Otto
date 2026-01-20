import { Tour } from 'nextstepjs';

export const steps: Tour[] = [
    {
        tour: 'mainTour',
        steps: [
            {
                icon: <>👋</>,
                title: 'Welcome to Otto',
                content: <p>Welcome to Otto, your personal subscription tracker! Let&apos;s take a quick tour.</p>,
                selector: 'body',
                showControls: true,
                showSkip: true,
                pointerPadding: 10,
                pointerRadius: 10,
            },
            {
                icon: <>💸</>,
                title: 'Track Expenses',
                content: <p>Here you can see an overview of your monthly expenses.</p>,
                selector: '#tour-expenses-header',
                side: 'bottom',
                showControls: true,
                showSkip: true,
                pointerPadding: 10,
                pointerRadius: 10,
            },
            {
                icon: <>➕</>,
                title: 'Add New Bills',
                content: <p>Click here to add a new subscription or bill to your list.</p>,
                selector: '#tour-add-bill-btn',
                side: 'left',
                showControls: true,
                showSkip: true,
                pointerPadding: 10,
                pointerRadius: 10,
            },
            {
                icon: <>💰</>,
                title: 'Manage Income',
                content: <p>Set your monthly income here to calculate how much you have left to spend.</p>,
                selector: '#tour-income-section',
                side: 'bottom',
                showControls: true,
                showSkip: true,
                pointerPadding: 10,
                pointerRadius: 10,
            },
        ],
    },
];
