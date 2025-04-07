import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Hardcoded sản phẩm
  const hardcodedProducts = [
    {
      _id: "67f35cf441f9e5b009ab2d0b",
      name: 'LaBuBu 1',
      description: 'Sản phẩm của một công ty ất ơ nào đó em không biết tên và đây là hàng lậu nhưng mà do em là đào lửa nên em sdex bán nó với giá trên trờitrời',
      price: '1.700.000.000',
      category: 'Electronics',
      imageUrl: '/images/nb2.jpg',
    },
    
  ];

  // Tìm sản phẩm theo id
  const product = hardcodedProducts.find((p) => p._id === id);

  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>← Quay lại</button>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px' }} />
      <p><strong>Giá:</strong> ${product.price}</p>
      <p><strong>Danh mục:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
