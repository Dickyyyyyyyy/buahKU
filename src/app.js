document.addEventListener('alpine:init', () => {
    Alpine.store('cart', {
        items: [],

        get quantity() {
            return this.items.reduce((acc, item) => acc + item.quantity, 0);
        },

        get total() {
            return this.items.reduce((acc, item) => acc + item.total, 0);
        },

        add(product) {
            const found = this.items.find(item => item.id === product.id);

            if (found) {
                found.quantity++;
                found.total = found.quantity * found.price;
            } else {
                this.items.push({
                    ...product,
                    quantity: 1,
                    total: product.price
                });
            }
        },

        remove(id) {
            const index = this.items.findIndex(item => item.id === id);

            if (this.items[index].quantity > 1) {
                this.items[index].quantity--;
                this.items[index].total -= this.items[index].price;
            } else {
                this.items.splice(index, 1);
            }
        }
    });

    Alpine.data('products', () => ({
        items: [
            {id:1, name:'Apel', price:20000, img:'apel.jpg'},
            {id:2, name:'Anggur', price:15000, img:'anggur.jpg'},
            {id:2, name:'Alpukat', price:17000, img:'alpukat.jpg'},
            {id:3, name:'Pisang', price:18000, img:'pisang.jpg'}
        ]
    }));

    window.rupiah = function (number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    }
});