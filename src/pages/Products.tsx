import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { categories, priceRanges, filterProducts } from '@/data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const categoryParam = searchParams.get('category') || 'all';
  const priceParam = searchParams.get('price') || 'all';
  
  const filteredProducts = filterProducts(categoryParam, priceParam);

  const updateFilter = (type: 'category' | 'price', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <SEO
        title="Products"
        description="Browse our collection of premium digital products: bot templates, automation scripts, API starters, and SaaS boilerplates."
        url="https://products.lokialpha.site/products"
      />

      <section className="py-12 md:py-20">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Products</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Premium templates and tools to accelerate your development workflow.
            </p>
          </motion.div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`md:w-64 shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}
            >
              <div className="sticky top-24 space-y-6">
                {/* Category Filter */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-display font-semibold mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => updateFilter('category', cat.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          categoryParam === cat.value
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-display font-semibold mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => updateFilter('price', range.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          priceParam === range.value
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">No products found matching your filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchParams(new URLSearchParams())}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
