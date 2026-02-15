import { useState, useEffect } from 'react';

export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

        // Set initial value
        setIsDesktop(mediaQuery.matches);

        // Handler for changes
        const handler = (e) => setIsDesktop(e.matches);

        // Add listener
        mediaQuery.addEventListener('change', handler);

        // Cleanup
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return isDesktop;
}
