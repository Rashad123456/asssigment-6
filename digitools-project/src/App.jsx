return (
  <div className="bg-[#f5f5f7] min-h-screen">
    <Navbar cartCount={cart.length} />
    <Banner />

    <main className="container-width py-16">
      <Products products={products} handleAddToCart={handleAddToCart} />

      <div className="mt-12">
        <Cart
          cart={cart}