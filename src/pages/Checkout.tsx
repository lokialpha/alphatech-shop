import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: MessageCircle,
    title: 'Start the Bot',
    description: 'Click "Buy on Telegram" on any product page. This opens our Telegram bot where you can browse and select products.',
    detail: 'Our bot is available 24/7 and responds instantly.',
  },
  {
    icon: CreditCard,
    title: 'Make Payment',
    description: 'The bot generates a secure payment link. We accept cards, crypto, and various payment methods through our secure gateway.',
    detail: 'All transactions are encrypted and secure.',
  },
  {
    icon: Download,
    title: 'Get Your Product',
    description: 'After payment confirmation, you immediately receive download links and license keys directly in the chat.',
    detail: 'No waiting - instant delivery via Telegram.',
  },
  {
    icon: CheckCircle,
    title: 'Start Building',
    description: 'Download your files, follow the documentation, and start building. Our support team is available if you need help.',
    detail: 'Support available via email and Telegram.',
  },
];

export default function Checkout() {
  return (
    <Layout>
      <SEO
        title="How to Buy"
        description="Learn how to purchase digital products from Alpha Tech via Telegram. Secure, instant delivery of premium developer tools."
        url="https://products.lokialpha.site/checkout"
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              How to <span className="text-gradient">Buy</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Purchase our products securely through Telegram. Fast checkout, instant delivery.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="font-display font-bold text-lg text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm text-primary">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Telegram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border mb-16"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-center">
              Why Purchase via Telegram?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Instant Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive your products immediately after payment - no waiting for emails.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Direct Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Get help directly in chat. No ticket systems or long wait times.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Secure Payments</h4>
                  <p className="text-sm text-muted-foreground">
                    Payments processed through secure gateways with buyer protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Order History</h4>
                  <p className="text-sm text-muted-foreground">
                    All your purchases and download links saved in one place.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8">
              Browse our products and click "Buy on Telegram" to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://t.me/lokialpha" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Open Telegram Bot
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/products">
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
