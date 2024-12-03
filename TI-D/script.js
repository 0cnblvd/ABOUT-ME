document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form dikirim sebelum validasi

    // Reset pesan kesalahan dan sukses
    document.querySelectorAll(".error-message").forEach(function(error) {
        error.style.display = "none";
    });
    document.getElementById("success-message").style.display = "none";

    // Ambil data form
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var isValid = true;

    // Validasi Nama
    if (name === "") {
        document.getElementById("name-error").textContent = "Nama harus diisi!";
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    }

    // Validasi Email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
        document.getElementById("email-error").textContent = "Email harus diisi!";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Email tidak valid!";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Validasi Pesan
    if (message === "") {
        document.getElementById("message-error").textContent = "Pesan harus diisi!";
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    }

    // Tampilkan pesan sukses jika form valid
    if (isValid) {
        document.getElementById("success-message").textContent = "Pesan berhasil dikirim!";
        document.getElementById("success-message").style.display = "block";
        document.getElementById("contact-form").reset();  // Reset form setelah sukses
    }
});

document.getElementById("reset-btn").addEventListener("click", function() {
    // Hapus pesan kesalahan atau sukses ketika form direset
    document.querySelectorAll(".error-message").forEach(function(error) {
        error.style.display = "none";
    });
    document.getElementById("success-message").style.display = "none";
});
