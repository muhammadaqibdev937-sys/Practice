import { Product } from "./Product.jsx"

function ProductTab()
{
  return(
    <>
    <Product title="Oil" price={2300}/>
    <Product  title="sOil" price={6300}/>
    <Product  title="mOil" price={8300}/>
    </>
  )
}

export{
    ProductTab
}