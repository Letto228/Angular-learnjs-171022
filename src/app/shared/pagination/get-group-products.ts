export function getGroupProdusts<T>(products: T[], elemNum: number): T[][] {
    const initialProducts = [...products];
    const newGroupProd: T[][] = [];

    while (initialProducts.length) {
        newGroupProd.push(initialProducts.splice(0, elemNum))
      }
  
      return newGroupProd;
}