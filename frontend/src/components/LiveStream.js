export default function LiveStream() {
    return (
        <div style={{width: "100%", maxWidth: "900px", margin: "0 auto"}}>
            <iframe
                src="http://localhost:8888/camstream"
                allow="autoplay; fullscreen"
                style={{
                    width: "100%",
                    height: "500px",
                    border: "none",
                    borderRadius: "8px",
                }}
            />
        </div>
    );
}