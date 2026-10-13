type FooterProps = {
    name?: string;
};

export function Footer({name}: FooterProps) {
    return (
        <footer className="container mx-auto flex flex-col items-center py-3 mt-8 border-t text-sm italic text-purple-600">
            <div>PROG27545 / Web Application Design and Implementation</div>
            <div>Sheridan College, {name ?? 'Ontario'}</div>
        </footer>
    );
}