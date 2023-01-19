import Footer from "@/layout/footer"

function About(){
    return(
        <div className="about-section">
            <p>About Section</p>
        </div>
    )
}

export default About

About.getLayout = function PageLayout(page){ 
    return(
        <>
            {page}
            <Footer />
        </>
    )
}