import {useEffect, useState} from "react";

export default function useWebSocket(url) {
    const [connected, setConnected] = useState(false);
    const [lastMessage, setLastMessage] = useState(null);
    const socketRef = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(url);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("WebSocket connected");
            setConnected(true);
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected");
            setConnected(false);
        };

        socket.onmessage = (event) => {
            console.log("WebSocket message received: ", event.data);
            setLastMessage(event.data);
        }

        return () => {
            socket.close();
        };
    }, [url]);

    return { connected, lastMessage };
}