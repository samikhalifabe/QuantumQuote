export const formatPrice = (price: number): string => {
  return price.toLocaleString("fr-FR") + "€"
}

export const calculateTotalPrice = (items: { price: number }[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0)
}