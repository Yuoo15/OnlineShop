import Footer from "../footer_component/footer"
import Header from "../header_component/header/Header"

export default({children})=>{
    return(
        <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}