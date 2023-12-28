import Link from "next/link";

const Footer = () => {

// accordion
  return (
    <footer className="bg-base-100 flex justify-center">
        <div className="footer p-10 text-base-content max-site-width">
            <div>
                <ul className="flex flex-col gap-2">
                <div className="footer-title"> Relevant Links </div>
                <li className="link link-hover"><Link href="/">Home</Link></li>
                <li className="link link-hover"><Link href="/about">About</Link></li>
                <li className="link link-hover"><Link href="/contact">Contact</Link></li>
                </ul>          
            </div>
            <div>
                <ul className="flex flex-col gap-2">
                    <div className="footer-title"> Get In Touch </div>
                    <li className="link link-hover"><Link href="/">danielwilson.io</Link></li>
                    <li className="link link-hover"><Link href="/about">github</Link></li>
                    <li className="link link-hover"><Link href="/contact">linkedin</Link></li>
                </ul>          
            </div>             
        </div>

    </footer>

  );
};

export default Footer;