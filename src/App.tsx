import { Product } from './components/Product';
import { useProduts } from "./hooks/products";
import { Loader } from "./components/Loader";
import { ErrorMsg } from "./components/ErrorMsg";
import { Modal } from "./components/Modal";
import { CreateProduct } from './components/CreateProduct';
import {Iproduct} from './models'
import { useState } from 'react';

function App() {

  const {loading, error, products} = useProduts();
  const [modal, setModal] = useState(false);

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMsg error={error} />}
      {products.map(product =>  <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create new product'>
        <CreateProduct onCreate={() => setModal(false)} />
      </Modal>}
    </div>
  )
}

export default App;
