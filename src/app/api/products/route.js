export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Table', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Smart Watch', price: 3000, category: 'Electronics', stock: 9 },
    { id: 'p5', name: 'Lip Stick', price: 50, category: 'Beauty', stock: 50 },
    { id: 'p6', name: 'Bed', price: 1500, category: 'Furniture', stock: 10 },
    { id: 'p7', name: 'Blush', price: 90, category: 'Beauty', stock: 40 },
    { id: 'p8', name: 'TV', price: 5000, category: 'Electronics', stock: 20 },
    { id: 'p9', name: 'Mascara', price: 40, category: 'Beauty', stock: 60 },
    { id: 'p10', name: 'Bed Lamp', price: 30, category: 'Furniture', stock: 10 },
    { id: 'p11', name: 'Perfume', price: 300, category: 'Beauty', stock: 30 }
  ];
  return Response.json(products);
};
