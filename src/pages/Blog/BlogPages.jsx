import { useEffect, useState } from 'react';

function BlogPages() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 500); // Delay 500ms untuk animasi
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className={`text-4xl font-semibold ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                Coming Soon
            </h1>
        </div>
    );
}

export default BlogPages;
