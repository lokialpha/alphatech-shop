import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Search, Clock, Code, ArrowRight, CheckCircle, MessageCircle, Star, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const highlights = [
  {
    icon: Code,
    title: 'Production Ready',
    description: 'Battle-tested code used by hundreds of developers worldwide.',
  },
  {
    icon: Clock,
    title: 'Save 100+ Hours',
    description: 'Skip the boilerplate and start building features that matter.',
  },
  {
    icon: Search,
    title: 'Free to Scroll',
    description: 'Browse prices and features freely.  Check plans anytime and buy via Telegram.',
  },
];

const trustBadges = [
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: CheckCircle, value: '100%', label: 'Satisfaction Rate' },
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      <SEO />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(190_95%_50%/0.1)_0%,_transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="container relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Zap className="w-4 h-4" />
              <span>Premium Digital Products</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ask Faster.<br />
              <span className="text-gradient">Ship Sooner.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Premium accounts, Subscriptions, and many pro accounts for clients. Save money with our services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://t.me/lokialpha" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Buy via Telegram
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/products">
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="font-display font-bold text-2xl text-foreground">{badge.value}</span>
                </div>
                <span className="text-sm text-muted-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Alpha Tech</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our products are crafted with care and tested in real-world applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Our most popular products that developers love.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-card border border-border overflow-hidden p-8 md:p-16 text-center"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Ready to buy <span className="text-gradient">faster</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Join 500+ clients who saved hundreds of hours and money with our products.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://t.me/lokialpha" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Start Shopping on Telegram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
