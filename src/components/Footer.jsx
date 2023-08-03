export default function Header() {
    const year = new Date().getFullYear()

    return (
        <Footer>
            <p>&copy; {year}</p>
        </Footer>
    );
}