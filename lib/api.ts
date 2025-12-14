import type {
    ProductResponse,
    ProductRequest,
    ProductUpdateRequest,
    CategoryResponseDto,
    CategoryRequestDto,
    CustomerResponseDto,
    CustomerAddressResponseDto,
    VariantResponse,
    VariantRequest,
    ProductImageResponse,
    Inventory,
    Page,
    UpdateResponse,
    ArrayResponse,
    CategoryUpdateRequestDto,
    CustomerAddressRequestDto,
    CustomerAddressUpdateRequestDto,
    CustomerRequestDto,
    CustomerUpdateRequestDto,
    ProductImageRequest,
    ProductImageUpdateRequest,
    VariantUpdateRequest,
} from './types';

import api from './appclient';

// Helper for query params (pageable)
const toPageableParams = (page: number = 0, size: number = 20, sort?: string[]) => ({
    page,
    size,
    ...(sort ? { sort: sort.join(',') } : {}),
});

// ====================== PRODUCTS ======================
export const productApi = {
    getAll: (page = 0, size = 20) =>
        api.get<Page<ProductResponse>>('/products', { params: toPageableParams(page, size) }),

    getById: (id: string) => api.get<ProductResponse>(`/products/${id}`),

    getBySlug: (slug: string) => api.get<ProductResponse>(`/products/slug/${slug}`),

    search: (query: string, page = 0, size = 20) =>
        api.get<Page<ProductResponse>>('/products/search', {
            params: { query, ...toPageableParams(page, size) },
        }),

    getByCategory: (categoryId: number, page = 0, size = 20) =>
        api.get<Page<ProductResponse>>(`/products/category/${categoryId}`, {
            params: toPageableParams(page, size),
        }),

    create: (data: ProductRequest) => api.post<ProductResponse>('/products', data),

    update: (id: string, data: ProductUpdateRequest) =>
        api.put<ProductResponse>(`/products/${id}`, data),

    delete: (id: string) => api.delete<void>(`/products/${id}`),
};

// ====================== CATEGORIES ======================
export const categoryApi = {
    getAll: () => api.get<ArrayResponse<CategoryResponseDto>>('/categories'),

    getById: (id: number) => api.get<CategoryResponseDto>(`/categories/${id}`),

    getRoot: () => api.get<ArrayResponse<CategoryResponseDto>>('/categories/root'),

    getChildren: (parentId: number) =>
        api.get<ArrayResponse<CategoryResponseDto>>(`/categories/${parentId}/children`),

    create: (data: CategoryRequestDto) => api.post<CategoryResponseDto>('/categories', data),

    update: (id: number, data: CategoryUpdateRequestDto) =>
        api.put<UpdateResponse<CategoryResponseDto>>(`/categories/${id}`, data),

    delete: (id: number) => api.delete<void>(`/categories/${id}`),

    hardDelete: (id: number) => api.delete<void>(`/categories/${id}/hard`),
};

// ====================== CUSTOMERS ======================
export const customerApi = {
    getAll: () => api.get<ArrayResponse<CustomerResponseDto>>('/customers'),

    getById: (id: string) => api.get<CustomerResponseDto>(`/customers/${id}`),

    create: (data: CustomerRequestDto) => api.post<CustomerResponseDto>('/customers', data),

    update: (id: string, data: CustomerUpdateRequestDto) =>
        api.put<UpdateResponse<CustomerResponseDto>>(`/customers/${id}`, data),

    delete: (id: string) => api.delete<void>(`/customers/${id}`),
};

// ====================== CUSTOMER ADDRESSES ======================
export const customerAddressApi = {
    getAll: () => api.get<ArrayResponse<CustomerAddressResponseDto>>('/customer-addresses'),

    getById: (id: number) => api.get<CustomerAddressResponseDto>(`/customer-addresses/${id}`),

    getByCustomerId: (customerId: string) =>
        api.get<ArrayResponse<CustomerAddressResponseDto>>(`/customer-addresses/customer/${customerId}`),

    create: (data: CustomerAddressRequestDto) =>
        api.post<CustomerAddressResponseDto>('/customer-addresses', data),

    update: (id: number, data: CustomerAddressUpdateRequestDto) =>
        api.put<UpdateResponse<CustomerAddressResponseDto>>(`/customer-addresses/${id}`, data),

    delete: (id: number) => api.delete<void>(`/customer-addresses/${id}`),

    hardDelete: (id: number) => api.delete<void>(`/customer-addresses/${id}/hard`),
};

// ====================== PRODUCT VARIANTS ======================
export const variantApi = {
    getAllByProduct: (productId: string, page = 0, size = 20) =>
        api.get<Page<VariantResponse>>(`/api/v1/products/${productId}/variants`, {
            params: toPageableParams(page, size),
        }),

    getById: (productId: string, variantId: string) =>
        api.get<VariantResponse>(`/api/v1/products/${productId}/variants/${variantId}`),

    create: (productId: string, data: VariantRequest) =>
        api.post<VariantResponse>(`/api/v1/products/${productId}/variants`, data),

    update: (productId: string, variantId: string, data: VariantUpdateRequest) =>
        api.put<VariantResponse>(`/api/v1/products/${productId}/variants/${variantId}`, data),

    delete: (productId: string, variantId: string) =>
        api.delete<void>(`/api/v1/products/${productId}/variants/${variantId}`),
};

// ====================== PRODUCT IMAGES ======================
export const productImageApi = {
    getAllByProduct: (productId: string, page = 0, size = 20) =>
        api.get<Page<ProductImageResponse>>(`/api/v1/products/${productId}/images`, {
            params: toPageableParams(page, size),
        }),

    getById: (productId: string, imageId: number) =>
        api.get<ProductImageResponse>(`/api/v1/products/${productId}/images/${imageId}`),

    create: (productId: string, data: ProductImageRequest) =>
        api.post<ProductImageResponse>(`/api/v1/products/${productId}/images`, data),

    update: (productId: string, imageId: number, data: ProductImageUpdateRequest) =>
        api.put<ProductImageResponse>(`/api/v1/products/${productId}/images/${imageId}`, data),

    delete: (productId: string, imageId: number) =>
        api.delete<void>(`/api/v1/products/${productId}/images/${imageId}`),
};

// ====================== INVENTORY ======================
export const inventoryApi = {
    getByVariant: (variantId: string) =>
        api.get<Inventory>(`/api/v1/variants/${variantId}/inventory`),

    getLowStock: (threshold?: number) =>
        api.get<ArrayResponse<Inventory>>('/api/v1/variants/{variantId}/inventory/low-stock', {
            params: threshold !== undefined ? { threshold } : {},
        }),

    addStock: (variantId: string, quantity: number, referenceId?: string, notes?: string) =>
        api.post<Inventory>(`/api/v1/variants/${variantId}/inventory/add`, null, {
            params: { quantity, referenceId, notes },
        }),

    removeStock: (variantId: string, quantity: number, referenceId?: string, notes?: string) =>
        api.post<Inventory>(`/api/v1/variants/${variantId}/inventory/remove`, null, {
            params: { quantity, referenceId, notes },
        }),

    reserveStock: (variantId: string, quantity: number, referenceId?: string) =>
        api.post<Inventory>(`/api/v1/variants/${variantId}/inventory/reserve`, null, {
            params: { quantity, referenceId },
        }),

    releaseStock: (variantId: string, quantity: number, referenceId?: string) =>
        api.post<Inventory>(`/api/v1/variants/${variantId}/inventory/release`, null, {
            params: { quantity, referenceId },
        }),

    adjustStock: (variantId: string, newAvailable: number, notes?: string) =>
        api.post<Inventory>(`/api/v1/variants/${variantId}/inventory/adjust`, null, {
            params: { newAvailable, notes },
        }),
};