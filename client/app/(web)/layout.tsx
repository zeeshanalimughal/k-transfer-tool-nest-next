import Footer from "@/components/common/website/footer";
import Header from "@/components/common/website/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
}
