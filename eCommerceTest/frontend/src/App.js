// import logo from './logo.svg';
// import './App.css';
import data from './data';
function App() {
  return (
    <div className="grid-container">
        {/* coloco logo da loja na direita e botões de acesso na esquerda */}
        <header className="row"> 
            <div className="brand"> 
                <a href="index.html">Lojinha</a>
            </div>
            <div>
                <a href="cart.html">Carrinho</a>
                <a href="signin.html">Cadastre</a>
            </div>
        </header>
   
        
        <main>
            {/* row center tem o comando flex para colocar itens um do lado do outro */}
            <div className="row center">
              {
                data.products.map(product =>( 
                      <div key={product._id} className="card">
                        <a href={`product/${product._id}`}>
                            {/* image size should be 680px by 830px  */}
                            <img className="medium" src={product.image} alt={product.name}></img>
                            
                        </a>
                        <div className="card-body">
                            <a href={`product/${product._id}`}>
                                <h2>{product.name}</h2>
                            </a>
                        </div>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            R$ {product.price}
                        </div>
                    </div>
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
