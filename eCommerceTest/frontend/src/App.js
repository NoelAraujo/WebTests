// import logo from './logo.svg';
// import './App.css';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
        {/* coloco logo da loja na direita e botões de acesso na esquerda */}
        <header className="row"> 
            <div className="brand"> 
                <a href="/">Lojinha</a>
            </div>
            <div>
                <a href="/cart">Carrinho</a>
                <a href="/signin">Cadastre</a>
            </div>
        </header>
   
        
        <main>
            {/* row center tem o comando flex para colocar itens um do lado do outro */}
            <div className="row center">
              {
                data.products.map(product =>( 
                      <Product key={product._id} product={product}></Product>
                ))
              }
                
                


            </div>
        </main>


        
        <footer className="row center">
            Peguei template do youtube, obrigado "Coding with Basir"
        </footer>
    </div>
  );
}

export default App;
