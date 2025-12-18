import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative rounded-xl bg-gradient-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30">
            {product.badge}
          </Badge>
        )}

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
            ${product.price}
          </span>
          <span className="text-sm text-muted-foreground">one-time</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="telegram" size="sm" className="flex-1" asChild>
            <a 
              href={`https://${product.telegramLink}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Buy on Telegram
            </a>
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
