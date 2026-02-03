export interface DummyItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  date: string;
  rating: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const generateDummyItems = (count: number): DummyItem[] => {
  const categories = [
    'Technology',
    'Design',
    'Business',
    'Health',
    'Travel',
    'Food',
  ];
  const items: DummyItem[] = [];

  for (let i = 1; i <= count; i++) {
    items.push({
      id: `item_${i}`,
      title: `Item ${i}`,
      description: `This is a detailed description for item ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: `https://picsum.photos/300/200?random=${i}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      rating: Math.floor(Math.random() * 5) + 1,
    });
  }

  return items;
};

const ALL_DUMMY_ITEMS = generateDummyItems(100);

/**
 * Get paginated dummy data
 * @param page - Page number (1-indexed)
 * @param itemsPerPage - Number of items per page (default: 10)
 * @returns Paginated response with data and metadata
 */
export function getPaginatedDummyData(
  page: number = 1,
  itemsPerPage: number = 10
): PaginatedResponse<DummyItem> {
  const totalItems = ALL_DUMMY_ITEMS.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Validate page number
  const validPage = Math.max(1, Math.min(page, totalPages));

  // Calculate start and end indices
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get data for current page
  const data = ALL_DUMMY_ITEMS.slice(startIndex, endIndex);

  return {
    data,
    currentPage: validPage,
    totalPages,
    totalItems,
    itemsPerPage,
    hasNextPage: validPage < totalPages,
    hasPrevPage: validPage > 1,
  };
}

/**
 * Get all dummy items without pagination
 */
export function getAllDummyItems(): DummyItem[] {
  return ALL_DUMMY_ITEMS;
}

/**
 * Search dummy items by title or description
 */
export function searchDummyItems(
  query: string,
  page: number = 1,
  itemsPerPage: number = 10
): PaginatedResponse<DummyItem> {
  const filtered = ALL_DUMMY_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const validPage = Math.max(1, Math.min(page, totalPages));

  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = filtered.slice(startIndex, endIndex);

  return {
    data,
    currentPage: validPage,
    totalPages,
    totalItems,
    itemsPerPage,
    hasNextPage: validPage < totalPages,
    hasPrevPage: validPage > 1,
  };
}

/**
 * Filter dummy items by category
 */
export function filterByCategory(
  category: string,
  page: number = 1,
  itemsPerPage: number = 10
): PaginatedResponse<DummyItem> {
  const filtered = ALL_DUMMY_ITEMS.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const validPage = Math.max(1, Math.min(page, totalPages));

  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = filtered.slice(startIndex, endIndex);

  return {
    data,
    currentPage: validPage,
    totalPages,
    totalItems,
    itemsPerPage,
    hasNextPage: validPage < totalPages,
    hasPrevPage: validPage > 1,
  };
}

/**
 * Get a single item by ID
 */
export function getDummyItemById(id: string): DummyItem | undefined {
  return ALL_DUMMY_ITEMS.find((item) => item.id === id);
}
