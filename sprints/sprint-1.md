
# eCommerce API – LLM-Friendly Context for Frontend Development (sprint 1)

## 1. Domain Overview

This API powers an eCommerce platform.

### Core Domains

* **Category**

  * Hierarchical (root categories and subcategories)
  * Used for navigation and product discovery

* **Product**

  * Belongs to exactly one category
  * Publicly visible in the storefront

* **Product Variant**

  * Belongs to a product
  * Represents purchasable options (size, color, price)

* **Product Images**

  * Multiple images per product
  * Used for gallery and product detail pages

* **Inventory**

  * Stock management per variant
  * Internal concern (not exposed directly in the storefront UI)

---

## 2. Frontend User Flows

* Browse root categories
* Navigate category tree (parent → children)
* List products by category
* Search products
* View product detail page

  * Product info
  * Image gallery
  * Available variants

---

## 3. API Contract Summary (Frontend-Relevant)

### Category API

```http
GET /categories
GET /categories/root
GET /categories/{id}
GET /categories/{parentId}/children
```

---

### Product API

```http
GET /products
GET /products/{id}
GET /products/slug/{slug}
GET /products/search
GET /products/category/{categoryId}
```

---

### Product Variants

```http
GET /api/v1/products/{productId}/variants
```

---

### Product Images

```http
GET /api/v1/products/{productId}/images
```

---

## 4. Frontend Data Models (Simplified DTOs)

### Category

```ts
interface Category {
  id: number
  name: string
  slug: string
  description?: string
  parentId?: number
}
```

---

### Product

```ts
interface Product {
  id: string
  title: string
  slug: string
  description?: string
  categoryId: number
  featured: boolean
  active: boolean
}
```

---

### Product Variant

```ts
interface Variant {
  id: string
  productId: string
  price: number
  comparePrice?: number
  color?: string
  size?: string
}
```

---

### Product Image

```ts
interface ProductImage {
  id: number
  productId: string
  url: string
  altText?: string
  priority: number
}
```

---

## 5. Relationships

* **Category → Category** (tree structure)

  * `parentId` defines hierarchy

* **Product → Category**

  * `product.categoryId`

* **Product → Variants**

  * One-to-many

* **Product → Images**

  * One-to-many

---

## 6. Frontend Constraints & Assumptions

* Public storefront (no authentication required)
* SEO-friendly pages
* Inventory is managed server-side and not shown directly
* Pagination supported for product and variant listings

---

## 7. How This Is Used by an LLM

This document is optimized to:

* Teach business intent (not infrastructure details)
* Enable UI generation (lists, detail pages, navigation)
* Reduce token usage
* Avoid leaking backend-only concerns

The full OpenAPI specification should be treated as a **secondary reference**, not primary input.
