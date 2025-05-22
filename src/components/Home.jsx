import React from "react";

const Home = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Mark-Movie</h1>
        <p style={styles.subtitle}>
            For Now View Some of the Watchlists
        </p>
        <a href="/watchlist" style={{ listStyle:"none",textDecoration:"none",color:"white",fontSize:"1.3rem",backgroundColor:'grey',padding:"20px",borderRadius:"1rem"} } >Watchlists</a>
      
    </div>
);

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#181818",
        color: "#fff",
        padding: "2rem",
    },
    title: {
        fontSize: "1.8rem",
        textAlign: "center",
        marginBottom: "1rem",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: "1.25rem",
        marginBottom: "2rem",
        maxWidth: "400px",
        textAlign: "center",
    },
    button: {
        padding: "0.75rem 2rem",
        background: "#e50914",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background 0.2s",
    },
};

export default Home;