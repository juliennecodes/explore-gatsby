import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function About(){
    return(
        <>
            <Header />
            <section className="about-page">
                <h1>About</h1>
                <p>This is the about page.</p>
            </section>
            <Footer />
        </>
    )
}