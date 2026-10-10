import type { Category, Product } from "@/types/product";

const PRIMARY_BASE_URL = 
"https://api.api-store.workers.dev/api/bazardor"

const FALLBACK_BASE_URL = 
"https://api.abcz.workers.dev/api/bazardor";

async function fetchFromApi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${PRIMARY_BASE_URL}${endpoint}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Primary API request failed");
    }

    return response.json();
  } catch {
    const response = await fetch(`${FALLBACK_BASE_URL}${endpoint}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Unable to fetch data");
    }

    return response.json();
  }
}

export async function getProducts(): Promise<Product[]> {
  return fetchFromApi<Product[]>("/products");
}

export async function getCategories(): Promise<Category[]> {
  return fetchFromApi<Category[]>("/categories");
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return fetchFromApi<Product[]>(
    `/products?category=${encodeURIComponent(category)}`
  );
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.slug === slug);
}