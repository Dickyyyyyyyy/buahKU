document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Apel Merah", price: 20000, img: "apel.jpg" },
      { id: 2, name: "Pisang Cavendish", price: 15000, img: "pisang.jpg" },
      { id: 3, name: "Anggur Merah", price: 25000, img: "anggur.jpg" },
      { id: 4, name: "Jeruk Manis", price: 18000, img: "jeruk.jpg" },
      { id: 5, name: "Mangga Harum Manis", price: 30000, img: "mangga.jpg" },
      { id: 6, name: "Semangka Merah", price: 35000, img: "semangka.jpg" },
      { id: 7, name: "Nanas Madu", price: 22000, img: "nanas.jpg" },
      { id: 8, name: "Pepaya California", price: 17000, img: "pepaya.jpg" }
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(product) {
      let item = this.items.find((i) => i.id === product.id);

      if (!item) {
        this.items.push({ ...product, quantity: 1, total: product.price });
      } else {
        item.quantity++;
        item.total = item.price * item.quantity;
      }

      this.updateCart();
    },

    remove(id) {
      let item = this.items.find((i) => i.id === id);

      if (item.quantity > 1) {
        item.quantity--;
        item.total = item.price * item.quantity;
      } else {
        this.items = this.items.filter((i) => i.id !== id);
      }

      this.updateCart();
    },

    updateCart() {
      this.total = this.items.reduce((sum, item) => sum + item.total, 0);
      this.quantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
  });
});

// Format Rupiah
function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}
