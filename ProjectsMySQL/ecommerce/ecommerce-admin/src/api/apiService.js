import axiosInstance from "./axiosInstance";

/* -------------------- BRAND APIs -------------------- */
export const getAllBrands = () => axiosInstance.get("brand/getAllBrands");
export const getBrandById = (id) => axiosInstance.get(`/brand/getBrandById/${id}`);
export const createBrand = (data) => axiosInstance.post("/brand/createBrand", data);
export const updateBrand = (id, data) => axiosInstance.put(`/brands/updateBrand/${id}`, data);
export const deleteBrand = (id) => axiosInstance.delete(`/brands/deleteBrand/${id}`);

/* -------------------- CATEGORY APIs -------------------- */
export const getAllCategories = () => axiosInstance.get("category/getAllCategories");
export const getCategoryById = (id) => axiosInstance.get(`/category/getCategoryById/${id}`);
export const createCategory = (data) => axiosInstance.post("/category/createCategory", data);
export const updateCategory = (id, data) => axiosInstance.put(`/category/updateCategory/${id}`, data);
export const deleteCategory = (id) => axiosInstance.delete(`/category/deleteCategory/${id}`);

/* -------------------- PRODUCT APIs -------------------- */
export const getAllProducts = () => axiosInstance.get("/product/getAllProducts");
export const getProductById = (id) => axiosInstance.get(`/product/getProductById/${id}`);
export const createProduct = (data) => axiosInstance.post("/product/createProduct", data);
export const updateProduct = (id, data) => axiosInstance.put(`/products/updateProduct/${id}`, data);
export const deleteProduct = (id) => axiosInstance.delete(`/products/deleteProduct/${id}`);
