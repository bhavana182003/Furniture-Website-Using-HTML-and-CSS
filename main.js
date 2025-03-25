document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    // Toggle menu for mobile view
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Rent button click alert
    document.querySelectorAll(".rent-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to your rental cart!");
        });
    });

    // Add sample images dynamically
    const furnitureContainer = document.querySelector(".furniture-container");
    const furnitureItems = [
        { img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0qpps4ZlboPhwSPIrf70KyoKst-NPLOvNNDogTEDs-LCjhwbdio2D3ePeyGUYkz32aX-RBwYEkilvg8WwN6wnejT1-r11SoVmZNDQf02D", name: "Premium Sofa", price: "$55/month" },
        { img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFwiYbZIsI-hWPN1En6PyCyVEXa2m111P6PDQlwA1SYi9miccWINZ_JXkoAHgl1X5uAiyIsxoJWB5LbPDqyuju8bxM5kx3fPdSS-EpEvUb&usqp=CAE", name: "Dining Table", price: "$40/month" },
        { img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFwiYbZIsI-hWPN1En6PyCyVEXa2m111P6PDQlwA1SYi9miccWINZ_JXkoAHgl1X5uAiyIsxoJWB5LbPDqyuju8bxM5kx3fPdSS-EpEvUb&usqp=CAE", name: "Dining Table", price: "$40/month" },
        { img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0qpps4ZlboPhwSPIrf70KyoKst-NPLOvNNDogTEDs-LCjhwbdio2D3ePeyGUYkz32aX-RBwYEkilvg8WwN6wnejT1-r11SoVmZNDQf02D", name: "Premium Sofa", price: "$55/month" },
        { img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSFwiYbZIsI-hWPN1En6PyCyVEXa2m111P6PDQlwA1SYi9miccWINZ_JXkoAHgl1X5uAiyIsxoJWB5LbPDqyuju8bxM5kx3fPdSS-EpEvUb&usqp=CAE", name: "Dining Table", price: "$40/month" }, 
        { img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQ-k-QglAZ0lR8cnVGDMTIPGiZ5lxv3cB7z1Z1WxWLBQuTXyXTf5ZpWd0vMada3VuIYOiunWk41XfHU0i28-yRZhHmWGbFCHfra_gbu6qs&usqp=CAE", name: "Ergonomic Chair", price: "$25/month" }
    ];

    furnitureItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("furniture-item");
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <a href="#" class="rent-btn">Rent Now</a>
        `;
        furnitureContainer.appendChild(div);
    });
});
