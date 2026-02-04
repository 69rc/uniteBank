// Simple account number generator
export function generateAccountNumber() {
  return '202' + Math.floor(100000000 + Math.random() * 900000000).toString();
}

// Customer ID generator
export function generateCustomerId() {
  return 'CU' + Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
}