export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <Footer>
            <p>&copy; {year}</p>
        </Footer>
    );
}