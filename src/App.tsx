import { Product } from './components/Product';
import { useProduts } from "./hooks/products";
import { Loader } from "./components/Loader";
import { ErrorMsg } from "./components/ErrorMsg";

function App() {

  const {loading, error, products} = useProduts();

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMsg error={error} />}
      {products.map(product =>  <Product product={product} key={product.id} />)}

      {/* <Product product={products[0]}/>
      <Product product={products[1]}/> */}
    </div>
  )
}

export default App;
