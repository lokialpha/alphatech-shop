import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Ban, MessageCircle, Check, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getProductBySlug } from '@/data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const isOutOfStock = product.stock === 'out-of-stock';
  const telegramHref = `https://${product.telegramLink}`;

  return (
    <Layout>
      <SEO
        title={product.title}
        description={product.shortDescription}
        url={`https://products.lokialpha.site/product/${product.slug}`}
        type="product"
        product={{ price: product.price }}
      />

      <section className="py-12 md:py-20">
        <div className="container max-w-5xl">
          {/* Back Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Badges */}
                {(product.badge || isOutOfStock) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.badge && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {product.badge}
                      </Badge>
                    )}
                    {isOutOfStock && (
                      <Badge className="bg-destructive/10 text-destructive border-destructive/30">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                )}

                {/* Title */}
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {product.title}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.fullDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-display text-xl font-bold mb-6">Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-display text-xl font-bold mb-6">What's Included</h2>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <ul className="space-y-3">
                    {product.whatsIncluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-display text-xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-2">
                  {product.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-display text-xl font-bold mb-6">FAQ</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {product.faq.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="rounded-xl bg-card border border-border px-6"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24 space-y-6"
              >
                {/* Product Image */}
                <div className="rounded-2xl overflow-hidden bg-card border border-border p-6">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-contain"
                  />
                </div>

                <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      {!isOutOfStock ? (
                        <>
                          <span className="text-sm line-through text-muted-foreground">
                            {(product.price + 5000).toLocaleString()} MMK
                          </span>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            5,000 MMK OFF
                          </Badge>
                        </>
                      ) : (
                        <Badge className="bg-destructive/10 text-destructive border-destructive/30">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-4xl text-foreground">
                        {product.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">MMK</span>
                    </div>
                    <span className={`text-sm ${isOutOfStock ? 'text-muted-foreground' : 'text-primary'}`}>
                      {isOutOfStock ? 'Currently unavailable' : 'One-time payment'}
                    </span>
                  </div>

                  {/* CTA */}
                  <Button
                    variant={isOutOfStock ? 'outline' : 'telegram'}
                    size="lg"
                    className="w-full mb-4"
                    asChild={!isOutOfStock}
                    disabled={isOutOfStock}
                  >
                    {isOutOfStock ? (
                      <>
                        <Ban className="w-5 h-5" />
                        Out of Stock
                      </>
                    ) : (
                      <a
                        href={telegramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Buy on Telegram
                      </a>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mb-6">
                    {isOutOfStock ? 'We will restock soon. Please check back later.' : 'Secure payment via Telegram Bot'}
                  </p>

                  {/* Guarantees */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Use 5,000 MMK discount</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Warranty included with expiry date</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">24hr support with admin</span>
                    </div>
                  </div>
                </div>

                {/* How to Buy Link */}
                <Link
                  to="/checkout"
                  className="block text-center text-sm text-primary hover:underline mt-4"
                >
                  How does purchasing work?
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
