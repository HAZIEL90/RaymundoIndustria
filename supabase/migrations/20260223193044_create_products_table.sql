/*
  # Create products table for raymundoindustria growshop

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique identifier for each product
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price
      - `image_url` (text) - URL to product image
      - `category` (text) - Product category (e.g., 'tubos', 'accesorios', 'semillas')
      - `stock` (integer) - Available stock quantity
      - `is_available` (boolean) - Whether product is available for sale
      - `wholesale_price` (numeric, optional) - Price for wholesale purchases
      - `created_at` (timestamptz) - Timestamp when product was created
      - `updated_at` (timestamptz) - Timestamp when product was last updated

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (anyone can view products)
    - Add policy for authenticated users to manage products (future admin functionality)
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  price numeric(10, 2) NOT NULL DEFAULT 0,
  image_url text DEFAULT '',
  category text DEFAULT 'general',
  stock integer DEFAULT 0,
  is_available boolean DEFAULT true,
  wholesale_price numeric(10, 2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view products (public read access)
CREATE POLICY "Public can view available products"
  ON products
  FOR SELECT
  USING (true);

-- Policy: Authenticated users can insert products
CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update products
CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete products
CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_is_available ON products(is_available);

-- Insert initial product (SAUVER)
INSERT INTO products (name, description, price, image_url, category, stock, is_available)
VALUES (
  'SAUVER',
  'Tubos de colores vibrantes, perfectos para tu tienda. Disponibles en múltiples colores: rosa, azul, rojo, naranja, amarillo, verde, blanco, fucsia y más.',
  0,
  '/Captura_de_pantalla_(2).png',
  'tubos',
  100,
  true
)
ON CONFLICT DO NOTHING;