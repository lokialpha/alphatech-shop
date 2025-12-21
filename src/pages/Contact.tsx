import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Telegram',
    description: 'Fastest way to reach us',
    value: 't.me/lokialpha',
    href: 'https://t.me/lokialpha',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries',
    value: 'support@lokialpha.site',
    href: 'mailto:support@lokialpha.site',
    primary: false,
  },
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, PayPal, and cryptocurrency through our Telegram bot. All payments are processed securely.',
  },
  {
    question: 'How long does it take to receive my product?',
    answer: 'Delivery is instant! After your payment is confirmed, you\'ll receive download links and license keys directly in the Telegram chat.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 14-day money-back guarantee on all products. If you\'re not satisfied, contact us for a full refund.',
  },
  {
    question: 'Can I use products for commercial projects?',
    answer: 'Absolutely! All our products come with a commercial license that allows unlimited use in personal and client projects.',
  },
  {
    question: 'Do you offer custom development?',
    answer: 'Yes, we take on custom projects. Contact us via Telegram or email with your requirements for a quote.',
  },
  {
    question: 'How do updates work?',
    answer: 'All products include lifetime updates. When we release an update, you\'ll be notified and can download the new version from the bot.',
  },
];

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact & Support"
        description="Get in touch with Alpha Tech support. We're here to help with purchases, technical questions, and custom development."
        url="https://products.lokialpha.site/contact"
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have questions? We're here to help. Choose your preferred way to reach us.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border transition-all duration-300 group ${
                  method.primary
                    ? 'bg-primary/5 border-primary/30 hover:border-primary hover:bg-primary/10'
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    method.primary ? 'bg-primary/20' : 'bg-secondary'
                  }`}>
                    <method.icon className={`w-7 h-7 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <p className={`font-medium ${method.primary ? 'text-primary' : 'text-foreground'}`}>
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 p-6 rounded-xl bg-card border border-border mb-16"
          >
            <Clock className="w-6 h-6 text-primary" />
            <div>
              <p className="font-medium">Average Response Time</p>
              <p className="text-sm text-muted-foreground">
                Telegram: &lt;2 hours • Email: &lt;24 hours
              </p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
