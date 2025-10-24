import { Facebook, Instagram, Youtube } from "lucide-react";
import { FooterLink } from "./ui/footer-link";

export function Footer() {

    return(
            <footer className="bg-[#1c1c1c] border-t[#333] p-12">
            <div className="my-0 mx-auto max-w-6xl flex  items-center flex-col">
                <p className =" text-[#a0a0a0] text-xs "></p>
                <ul className = "flex list-none mt-4  gap-3">

                    <li>
                        <FooterLink>
                            <Facebook/>
                        </FooterLink>
                    </li>

                    <li>
                        <FooterLink>
                            <Instagram/>
                        </FooterLink>

                        </li>

                    <li>
                        <FooterLink>
                            <Youtube/>
                        </FooterLink>
                            </li>
                </ul>
            </div>
        </footer>
    )
}