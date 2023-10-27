import {
    useState,
    useEffect
} from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Você pode ajustar o valor de 768px conforme necessário

        const checkIsMobile = () => {
            setIsMobile(mediaQuery.matches);
        };

        checkIsMobile(); // Verifique inicialmente quando o componente for montado

        // Adicione um ouvinte de mídia para atualizar o estado quando a janela for redimensionada
        mediaQuery.addListener(checkIsMobile);

        return () => {
            mediaQuery.removeListener(checkIsMobile);
        };
    }, []);

    return isMobile;
}

export default useIsMobile;