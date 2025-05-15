document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            alert("Produk berhasil dimasukkan ke keranjang!");
        });
    });

    document.querySelector(".contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Terima kasih! Pesan Anda telah dikirim.");
    });
});
