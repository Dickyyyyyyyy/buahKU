document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id:1, name: 'Apel', img: 'apel.jpg', price: 20000},
            {id:2, name: 'Pisang', img: 'pisang.jpg', price: 18000},
            {id:3, name: 'Anggur', img: 'anggur.jpg', price: 25000},
            {id:4, name: 'Jeruk', img: 'jeruk.jpg', price: 27000},
            {id:5, name: 'Kiwi', img: 'kiwi.jpg', price: 32000},
            {id:6, name: 'Semangka', img: 'semangka.jpg', price: 21000},
            {id:7, name: 'Mangga', img: 'mangga.jpg', price: 22000},
            {id:8, name: 'Pepaya', img: 'pepaya.jpg', price: 14000},
            {id:9, name: 'Stroberi', img: 'stroberi.jpg', price: 39000},
            {id:10, name: 'Alpukat', img: 'alpukat.jpg', price: 21500},
        ],
    }));
    
    Alpine.store("cart", {
    items: [],
    quantity: 0,
    total: 0,

    add(product) {
      const found = this.items.find((item) => item.id === product.id);

      if (!found) {
        this.items.push({
          ...product,
          quantity: 1,
          total: product.price,
        });
        this.quantity++;
        this.total += product.price;
      } else {
        found.quantity++;
        found.total = found.quantity * found.price;
        this.quantity++;
        this.total += found.price;
      }
    },

    remove(id) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index === -1) return;

      const item = this.items[index];
      this.quantity--;
      this.total -= item.price;

      item.quantity--;
      item.total = item.quantity * item.price;

      if (item.quantity === 0) {
        this.items.splice(index, 1);
      }
    },
  });

  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Apel Merah",
        price: 15000,
        img: "apel.jpg",
      },
      {
        id: 2,
        name: "Jeruk Manis",
        price: 12000,
        img: "jeruk.jpg",
      },
      {
        id: 3,
        name: "Pisang Cavendish",
        price: 10000,
        img: "pisang.jpg",
      },
    ],
  }));
});

//konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};