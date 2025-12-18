import { Link } from 'react-router-dom';
import { Zap, Mail, MessageCircle, Github, Twitter } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Bot Templates', href: '/products?category=bots' },
    { label: 'Scripts', href: '/products?category=scripts' },
    { label: 'SaaS Boilerplate', href: '/product/mini-saas-boilerplate' },
  ],
  support: [
    { label: 'How to Buy', href: '/checkout' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/products' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/policies/terms' },
    { label: 'Privacy Policy', href: '/policies/privacy' },
    { label: 'Refund Policy', href: '/policies/refund' },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: 'https://t.me/AlphaTechBot', label: 'Telegram' },
  { icon: Twitter, href: 'https://twitter.com/alphatech', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/alphatech', label: 'GitHub' },
  { icon: Mail, href: 'mailto:support@lokialpha.site', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Alpha<span className="text-gradient">Tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Premium digital products for developers and creators. Build faster, ship sooner.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alpha Tech. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            products.lokialpha.site
          </p>
        </div>
      </div>
    </footer>
  );
}
