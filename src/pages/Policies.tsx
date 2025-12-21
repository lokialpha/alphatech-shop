import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';

const policies = {
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'December 2024',
    content: `
# Terms of Service

Welcome to Alpha Tech. By purchasing our digital products, you agree to these terms.

## License Agreement

When you purchase a product from Alpha Tech, you receive a non-exclusive, worldwide license to use the product for personal and commercial purposes.

### What You Can Do:
- Use the product in unlimited personal projects
- Use the product in unlimited commercial projects
- Modify the product for your own use
- Use the product for client work

### What You Cannot Do:
- Resell, redistribute, or share the product files
- Include the product in an open-source project
- Claim the product as your own creation
- Use the product to create a competing product

## Intellectual Property

All products remain the intellectual property of Alpha Tech. Your purchase grants you a license to use the product, not ownership of the underlying intellectual property.

## Support

Support is provided as specified in each product listing. Support includes help with:
- Installation and setup issues
- Bug reports and fixes
- Questions about product usage

Support does not include:
- Custom development work
- Integration with third-party services
- General programming help unrelated to the product

## Updates

Products include lifetime updates. Updates are provided at our discretion and may include bug fixes, improvements, and new features.

## Termination

We reserve the right to terminate your license if you violate these terms. Upon termination, you must delete all copies of the product.

## Changes to Terms

We may update these terms at any time. Continued use of our products constitutes acceptance of the updated terms.

## Contact

For questions about these terms, contact us at support@lokialpha.site.
    `,
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'December 2024',
    content: `
# Privacy Policy

Alpha Tech ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and protect your information.

## Information We Collect

### Information You Provide:
- Name and email address (for order processing)
- Telegram username (for delivery)
- Payment information (processed securely by third parties)

### Automatically Collected:
- Device and browser information
- IP address and location (approximate)
- Pages visited and actions taken on our site

## How We Use Your Information

We use your information to:
- Process and deliver your orders
- Provide customer support
- Send product updates and announcements
- Improve our products and services
- Comply with legal obligations

## Information Sharing

We do not sell your personal information. We may share information with:
- Payment processors (to process transactions)
- Telegram (for order delivery)
- Legal authorities (when required by law)

## Data Security

We implement appropriate security measures to protect your information, including:
- Encrypted data transmission (HTTPS)
- Secure payment processing
- Limited access to personal data

## Your Rights

You have the right to:
- Access your personal data
- Request correction of inaccurate data
- Request deletion of your data
- Opt out of marketing communications

## Cookies

We use cookies to:
- Remember your preferences
- Analyze site traffic
- Improve user experience

You can disable cookies in your browser settings.

## Changes to This Policy

We may update this policy at any time. We will notify you of significant changes via email or website notice.

## Contact

For privacy-related questions, contact us at support@lokialpha.site.
    `,
  },
  refund: {
    title: 'Refund Policy',
    lastUpdated: 'December 2024',
    content: `
# Refund Policy

We want you to be completely satisfied with your purchase. If you're not happy, we're here to help.

## 14-Day Money-Back Guarantee

All products come with a 14-day money-back guarantee. If you're not satisfied with your purchase for any reason, you can request a full refund within 14 days of purchase.

## How to Request a Refund

1. Contact us via Telegram (t.me/lokialpha) or email (support@lokialpha.site)
2. Provide your order ID and Telegram username
3. Briefly explain why you're requesting a refund

We'll process your refund within 3-5 business days.

## Refund Process

- Refunds are issued to the original payment method
- Processing time depends on your payment provider
- You'll receive confirmation when the refund is processed

## After a Refund

Once your refund is processed:
- Your license to use the product is terminated
- You must delete all copies of the product files
- You will no longer receive updates or support for that product

## Exceptions

Refunds may not be available if:
- More than 14 days have passed since purchase
- You've violated our Terms of Service
- You've requested multiple refunds (pattern of abuse)

## Partial Refunds

In some cases, we may offer a partial refund instead of a full refund:
- If significant time has passed and you've used the product extensively
- If you're only unsatisfied with part of a bundle

## Contact

For refund requests or questions, contact:
- Telegram: t.me/lokialpha
- Email: support@lokialpha.site
    `,
  },
};

export default function Policies() {
  const { type } = useParams<{ type: string }>();
  const policy = type ? policies[type as keyof typeof policies] : undefined;

  if (!policy) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <SEO
        title={policy.title}
        description={`${policy.title} for Alpha Tech digital products store.`}
        url={`https://products.lokialpha.site/policies/${type}`}
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="mb-8 pb-8 border-b border-border">
              <h1 className="font-display text-4xl font-bold mb-2 text-foreground">
                {policy.title}
              </h1>
              <p className="text-muted-foreground">
                Last updated: {policy.lastUpdated}
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground [&_h1]:text-foreground [&_h1]:font-display [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:space-y-2 [&_li]:pl-2">
              {policy.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index}>{line.replace('# ', '')}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index}>{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index}>{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {line.replace('- ', '')}
                    </li>
                  );
                }
                if (line.trim()) {
                  return <p key={index}>{line}</p>;
                }
                return null;
              })}
            </div>
          </motion.article>

          {/* Policy Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display font-semibold mb-4">Other Policies</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(policies)
                .filter(([key]) => key !== type)
                .map(([key, p]) => (
                  <Link
                    key={key}
                    to={`/policies/${key}`}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm hover:bg-secondary/80 transition-colors"
                  >
                    {p.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
