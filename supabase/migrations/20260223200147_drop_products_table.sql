/*
  # Drop products table

  1. Changes
    - Drop all RLS policies on products table
    - Drop products table completely
  
  2. Security
    - Removes all existing policies before dropping table
*/

-- Drop all policies on products table
DROP POLICY IF EXISTS "Anyone can view available products" ON products;
DROP POLICY IF EXISTS "Anyone can view products" ON products;

-- Drop the products table
DROP TABLE IF EXISTS products;
