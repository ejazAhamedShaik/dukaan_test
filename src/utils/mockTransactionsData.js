const mockData = Array.from({ length: 50 }, (_, index) => ({
  id: "#281209",
  orderDate: new Date(Date.now() - index * 86400000), // Generate random dates within a range
  orderAmount: Math.floor(Math.random() * 500) + 10, // Random amounts between $10 and $500
  transactionFees: Math.floor(Math.random() * 10) + 2, // Random fees between $2 and $12
}));

export default mockData
