import { useState, useEffect } from 'react';

export function useTypewriterEffect(texts, typingSpeed = 150, deletingSpeed = 50) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        const updateSpeed = isDeleting ? deletingSpeed : typingSpeed;

        const timeout = setTimeout(() => {
            setDisplayedText(currentText.substring(0, isDeleting ? displayedText.length - 1 : displayedText.length + 1));
            if (!isDeleting && displayedText === currentText) {
                setIsDeleting(true);
                setTimeout(() => {}, 1000); // Pause at the end of typing before deleting
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % texts.length); // Loop to the next text
            }
        }, updateSpeed);

        return () => clearTimeout(timeout);
    }, [texts, currentIndex, displayedText, isDeleting, typingSpeed, deletingSpeed]);

    return displayedText;
}