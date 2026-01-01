import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ban, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const isOutOfStock = product.stock === 'out-of-stock';
  const telegramHref = `https://${product.telegramLink}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative rounded-xl bg-gradient-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
    >
      {isOutOfStock && (
        <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-[2px] pointer-events-none" />
      )}

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Product Image */}
      <div className="relative h-36 w-full overflow-hidden bg-muted/20 flex items-center justify-center">
        {isOutOfStock && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <Badge className="bg-destructive/10 text-destructive border-destructive/30 shadow-sm">
              Out of Stock
            </Badge>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.title}
          className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute top-3 right-3 bg-primary/20 text-primary border-primary/30">
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="relative p-5">

        {/* Title & Description */}
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Features preview */}
        <ul className="space-y-1 mb-6">
          {product.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display font-bold text-2xl text-foreground">
            {product.price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">MMK</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            variant={isOutOfStock ? 'outline' : 'telegram'}
            size="sm"
            className="flex-1"
            asChild={!isOutOfStock}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? (
              <>
                <Ban className="w-4 h-4" />
                Out of Stock
              </>
            ) : (
              <a 
                href={telegramHref} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Check on Telegram
              </a>
            )}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/product/${product.slug}`}>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
