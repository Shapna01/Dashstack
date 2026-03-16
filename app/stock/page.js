"use client";

import { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";

export default function ProductStock() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    price: "",
    stock: "",

  });

  const itemsPerPage = 9;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = filteredProducts.length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;
    setProducts(products.filter((p) => p.id !== id));
  };

  const openEdit = (product) => {
    setEditingProduct(product);
    setEditForm({
      title: product.title,
      price: product.price,
      stock: product.stock,
    });
  };

  const saveEdit = () => {
    const updatedProducts = products.map((p) =>
      p.id === editingProduct.id
        ? {
            ...p,
            title: editForm.title,
            price: editForm.price,
            stock: editForm.stock,
          }
        : p
    );

    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  return (
    <div >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Stock</h2>

        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-9 pr-3 py-2 border rounded-lg text-sm outline-none focus:border-blue-400"
          />
        </div>
      </div>

    
        <div className="bg-white shadow rounded-lg overflow-hidden  w-[1192px] h-[811px]  mt-[5px]">
      
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr className="text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Piece</th>
              <th className="p-3">Available Colors</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-12 h-12 object-contain"
                  />
                </td>

                <td className="p-3 font-medium text-gray-700">
                  {product.title}
                </td>

                <td className="p-3 capitalize text-gray-500">
                  {product.category}
                </td>

                <td className="p-3 text-blue-600 font-semibold">
                  ${product.price}
                </td>

                <td className="p-3 text-gray-600">{product.stock}</td>

                <td className="p-3">
                  <div className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-400"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-400"></span>
                    <span className="w-4 h-4 rounded-full bg-purple-400"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                  </div>
                </td>

                <td className="p-3 flex gap-4">
                  <button
                    onClick={() => openEdit(product)}
                    className="text-blue-500 hover:text-blue-700 text-lg"
                  >
                    <FiEdit />
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center p-4 text-sm text-gray-600">
          <div>
            Showing {indexOfFirstItem + 1}–
            {Math.min(indexOfLastItem, totalItems)} of {totalItems}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              {"<"}
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {editingProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Product</h3>

            <input
              className="border p-2 w-full mb-3 rounded"
              value={editForm.title}
              onChange={(e) =>
                setEditForm({ ...editForm, title: e.target.value })
              }
            />

            <input
              className="border p-2 w-full mb-3 rounded"
              value={editForm.price}
              onChange={(e) =>
                setEditForm({ ...editForm, price: e.target.value })
              }
            />

            <input
              className="border p-2 w-full mb-4 rounded"
              value={editForm.stock}
              onChange={(e) =>
                setEditForm({ ...editForm, stock: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingProduct(null)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveEdit}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}