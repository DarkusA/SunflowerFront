    import { useState } from "react";
    import ProductEntity from "./ProductEntity";
    import "./Catalog.css";

    const Catalog = () => {

        const [categories, setCategories] = useState([
            {
                id: 0,
                name: "Sin categoría"
            },
            {
                id: 1,
                name: "Remeras"
            },
            {
                id: 2,
                name: "Pantalones"
            },
            {
                id: 3,
                name: "Camperas"
            },
            {
                id: 4,
                name: "Buzos"
            },
            {
                id: 5,
                name: "Calzado"
            },
            {
                id: 6,
                name: "Accesorios"
            }
        ]);

        const [products, setProducts] = useState([
            {
                id: 1,
                name: "Remera Negra",
                price: 25000,
                stock: 15,
                categoryId: 1
            },
            {
                id: 2,
                name: "Remera Básica Blanca",
                price: 20000,
                stock: 0,
                categoryId: 1
            },
            {
                id: 3,
                name: "Jean Straight Azul",
                price: 45000,
                stock: 8,
                categoryId: 2
            },
            {
                id: 4,
                name: "Pantalón Cargo Negro",
                price: 50000,
                stock: 10,
                categoryId: 2
            },
            {
                id: 5,
                name: "Campera Negra",
                price: 70000,
                stock: 5,
                categoryId: 3
            },
            {
                id: 6,
                name: "Buzo Gris",
                price: 55000,
                stock: 12,
                categoryId: 4
            },
            {
                id: 7,
                name: "Zapatillas Blancas",
                price: 85000,
                stock: 6,
                categoryId: 5
            },
            {
                id: 8,
                name: "Gorra Negra",
                price: 18000,
                stock: 20,
                categoryId: 6
            }
        ]);

        const [nextProductId, setNextProductId] = useState(9);
        const [productName, setProductName] = useState("");
        const [price, setPrice] = useState("");
        const [stock, setStock] = useState(0);
        const [categoryRelationId, setCategoryRelationId] = useState(1);
        const [editingProductId, setEditingProductId] = useState(null);

        const handleProductCreate = () => {
            const newProduct = {
                id: nextProductId,
                name: productName,
                price: parseFloat(price),
                stock: parseInt(stock),
                categoryId: parseInt(categoryRelationId)
            };
            setProducts([
                ...products,
                newProduct
            ]);

            setNextProductId(id => id + 1);

            setProductName("");
            setPrice("");
            setStock(0);
            setCategoryRelationId(1);
        };

        const handleProductDelete = (id) => {
            setProducts(
                products.filter(product => product.id !== id)
            );
        };

        const handleProductEdit = (id) => {

            const product = products.find(product => product.id === id);

            setProductName(product.name);
            setPrice(product.price);
            setStock(product.stock);
            setCategoryRelationId(product.categoryId);

            setEditingProductId(id);
        };

        const handleProductUpdate = () => {
            setProducts(
                products.map(product =>
                    product.id === editingProductId
                        ? {
                            ...product,
                            name: productName,
                            price: parseFloat(price),
                            stock: parseInt(stock),
                            categoryId: parseInt(categoryRelationId)
                        }
                        : product
                )
            );

            setProductName("");
            setPrice("");
            setStock(0);
            setCategoryRelationId(1);

            setEditingProductId(null);
        };

            const [nextCategoryId, setNextCategoryId] = useState(7);
            const [categoryName, setCategoryName] = useState("");
            const [editingCategoryId, setEditingCategoryId] = useState(null);

            const handleCategoryCreate = () => {
            const newCategory = {
                id: nextCategoryId,
                name: categoryName
            };
            setCategories([
                ...categories,
                newCategory
            ]);

            setNextCategoryId(id => id + 1);
            setCategoryName("");
        };

        const handleCategoryDelete = (id) => {
            setCategories(
                categories.filter(category => category.id !== id)
            );

            setProducts(
                products.map(product =>
                product.categoryId === id
                    ? {
                        ...product,
                        categoryId: 0
                    }
                    : product
            ))
        };

        const handleCategoryEdit = (id) => {

            const category = categories.find(category => category.id === id);

            setCategoryName(category.name);
            setEditingCategoryId(id);
        };

        const handleCategoryUpdate = () => {
            setCategories(
                categories.map(category =>
                    category.id === editingCategoryId
                        ? {
                            ...category,
                            name: categoryName
                        }
                        : category
                )
            );

            setCategoryName("");
            setEditingCategoryId(null);
        };

        return (
            <>
                <form>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={(event) => setProductName(event.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Stock"
                        value={stock}
                        onChange={(event) => setStock(event.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Category ID"
                        value={categoryRelationId}
                        onChange={(event) => setCategoryRelationId(event.target.value)}
                    />
                    {editingProductId === null ? (
                        <button
                            type="button"
                            onClick={handleProductCreate}
                        >
                            Create
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleProductUpdate}
                        >
                            Update
                        </button>
                    )}
                </form>
                <form>
                    <input
                        type="text"
                        placeholder="Category Name"
                        value={categoryName}
                        onChange={(event) => setCategoryName(event.target.value)}
                    />
                    {editingCategoryId === null ? (
                        <button
                            type="button"
                            onClick={handleCategoryCreate}
                        >
                            Create
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleCategoryUpdate}
                        >
                            Update
                        </button>
                    )}
                </form>
                {categories.map(category => (
                    <div
                        key={category.id}
                        className="category-section"
                    >
                        <h2>{category.name}</h2>
                        <button
                            type="button"
                            onClick={() => handleCategoryEdit(category.id)}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            onClick={() => handleCategoryDelete(category.id)}
                        >
                            Delete
                        </button>
                        <div className="products-container">
                            {products
                                .filter(product => product.categoryId === category.id)
                                .map(product => (
                                    <ProductEntity
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        stock={product.stock}
                                        onEdit={handleProductEdit}
                                        onDelete={handleProductDelete}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))}
            </>
        );
    };

    export default Catalog;