// js/data.js
const productsData = [
    {
        id: 1,
        name: "Carbon Ceramic Brakes",
        brand: "Porsche",
        price: "4500",
        category: "Brakes",
        image: "images/products/porsche-brake.jpg",
        partNumber: "P-911-CB"
    },
    {
        id: 2,
        name: "M-Performance Exhaust",
        brand: "BMW",
        price: "2800",
        category: "Exhaust",
        image: "images/products/bmw-exhaust.jpg",
        partNumber: "B-M4-EX"
    },
    {
        id: 3,
        name: "LED Matrix Headlight",
        brand: "Mercedes",
        price: "1500",
        category: "Lighting",
        image: "images/products/merc-light.jpg",
        partNumber: "M-CLS-LED"
    }
];

const categories = ["All", "Brakes", "Exhaust", "Lighting", "Engine Parts"];
// js/main.js
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
    if(pageId === 'shop') renderProducts(productsData);
    window.scrollTo(0,0);
}

function renderProducts(data) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<p class="text-gray-500 col-span-3 text-center py-20">No items found.</p>';
        return;
    }

    data.forEach(p => {
        grid.innerHTML += `
            <div class="glass-card">
                <img src="${p.image}" class="w-full h-44 object-cover rounded-md mb-4 opacity-80">
                <span class="text-red-600 text-[10px] font-bold uppercase tracking-widest">${p.category}</span>
                <h3 class="text-white font-bold mt-1">${p.name}</h3>
                <p class="text-gray-500 text-[10px]">Part: ${p.partNumber}</p>
                <div class="flex justify-between items-center mt-6">
                    <span class="text-xl font-mono text-white font-bold">€${p.price}</span>
                    <button onclick="order('${p.name}', '${p.partNumber}')" 
                            class="bg-white text-black text-[10px] px-4 py-2 font-black uppercase hover:bg-red-600 hover:text-white transition">
                        Order
                    </button>
                </div>
            </div>`;
    });
}

function filterByCategory(cat) {
    const filtered = cat === 'All' ? productsData : productsData.filter(p => p.category === cat);
    renderProducts(filtered);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (term.length > 0) {
        showPage('shop');
        const filtered = productsData.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.partNumber.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );
        renderProducts(filtered);
    }
});

function order(name, pn) {
    const phone = "201000000000"; // رقمك هنا
    const msg = `Hello Herr Original,\nI want to order:\nItem: ${name}\nPart No: ${pn}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

window.onload = () => showPage('home');