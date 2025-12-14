// api/models.ts

/**
 * ApiResponse<T>
 * App response model is the wrapper for all responses
 */

export interface ResponseType<T> {
    success: boolean;
    data: T;
    error: string | null;
    timestamp: string;
    status: number;
    path: string;
}

export interface UpdateResponse<T> {
    message: string;
    hasChanged: boolean;
    data: T;
}

// Paginated response (Spring Data Page)
export interface Page<T> {
    totalElements: number;
    totalPages: number;
    pageable: PageableObject;
    first: boolean;
    last: boolean;
    size: number;
    content: T[];
    number: number;
    sort: SortObject;
    numberOfElements: number;
    empty: boolean;
}

interface PageableObject {
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
    offset: number;
    sort: SortObject;
}

interface SortObject {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

// Simple array response
export type ArrayResponse<T> = T[];

/**
 * All models related to the products 
 */

export interface ProductResponse {
    id: string;
    title: string;
    description: string;
    slug: string;
    categoryId: number;
    brand: string;
    material: string;
    avgRating: number;
    reviewsCount: number;
    metaTitle: string;
    metaDescription: string;
    newUntil?: string; // date-time
    createdAt: string;
    updatedAt: string;
    featured: boolean;
    active: boolean;
}

export interface ProductRequest {
    title: string;
    description?: string;
    slug: string;
    categoryId: number;
    brand?: string;
    material?: string;
    metaTitle?: string;
    metaDescription?: string;
    featured?: boolean;
    active?: boolean;
}

export interface ProductUpdateRequest {
    title?: string;
    description?: string;
    slug?: string;
    categoryId?: number;
    brand?: string;
    material?: string;
    metaTitle?: string;
    metaDescription?: string;
    newUntil?: string;
    featured?: boolean;
    active?: boolean;
}

export interface ProductImageResponse {
    id: number;
    productId: string;
    url: string;
    altText?: string;
    priority: number;
    createdAt: string;
}

export interface ProductImageRequest {
    url: string;
    altText?: string;
    priority?: number;
}

export interface ProductImageUpdateRequest {
    url?: string;
    altText?: string;
    priority?: number;
}



/**
 * All models related to the categories 
 */

export interface CategoryResponseDto {
    id: number;
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    parentId?: number;
    parentName?: string;
    childrenCount: number;
    createdAt: string;
}

export interface CategoryRequestDto {
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    parentId?: number;
}

export interface CategoryUpdateRequestDto {
    name?: string;
    slug?: string;
    description?: string;
    imageUrl?: string;
    parentId?: number;
}

/**
 * All models related to the customers 
 */

export interface CustomerResponseDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    lastLoginAt?: string;
    createdAt: string;
    updatedAt: string;
    verified: boolean;
}

export interface CustomerRequestDto {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    password: string;
}

export interface CustomerUpdateRequestDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

export interface CustomerAddressResponseDto {
    id: number;
    customerId: string;
    fullName: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    addressLine1: string;
    addressLine2?: string;
    type: 'SHIPPING' | 'BILLING';
    default: boolean;
}

export interface CustomerAddressRequestDto {
    customerId: string;
    fullName: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    addressLine1: string;
    addressLine2?: string;
    type: 'SHIPPING' | 'BILLING';
    default?: boolean;
}

export interface CustomerAddressUpdateRequestDto {
    fullName?: string;
    phone?: string;
    country?: string;
    state?: string;
    city?: string;
    zipCode?: string;
    addressLine1?: string;
    addressLine2?: string;
    type?: 'SHIPPING' | 'BILLING';
    default?: boolean;
}

/**
 * All models related to the variants
 */

export interface VariantResponse {
    id: string;
    productId: string;
    sku: string;
    color?: string;
    size?: string;
    price: number;
    comparePrice?: number;
    weight?: number;
    width?: number;
    height?: number;
    depth?: number;
    barcode?: string;
    createdAt: string;
    updatedAt: string;
}

export interface VariantRequest {
    sku: string;
    color?: string;
    size?: string;
    price?: number;
    comparePrice?: number;
    weight?: number;
    width?: number;
    height?: number;
    depth?: number;
    barcode?: string;
}

export interface VariantUpdateRequest {
    sku?: string;
    color?: string;
    size?: string;
    price?: number;
    comparePrice?: number;
    weight?: number;
    width?: number;
    height?: number;
    depth?: number;
    barcode?: string;
}

export interface Inventory {
    id: number;
    quantityAvailable: number;
    quantityReserved: number;
    lowStockThreshold: number;
    createdAt: string;
    updatedAt: string;
    stockLevel: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
}