// Fungsi ini akan menjalankan saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
// Toggle menu untuk semua tombol nav-toggle
var toggles = document.querySelectorAll('.nav-toggle');
toggles.forEach(function(btn) {
btn.addEventListener('click', function() {
// cari elemen nav yang berada di header yang sama
var header = btn.closest('.site-header');
var nav = header.querySelector('.nav');
// jika nav belum ada class open, tambahkan; kalau sudah, hapus — ini membuat menu mobile muncul/tidak
if (nav.classList.contains('open')) nav.classList.remove('open');
else nav.classList.add('open');
});
});


// Validasi sederhana untuk halaman contact
var form = document.getElementById('contact-form');
if (form) {
form.addEventListener('submit', function(e) {
e.preventDefault(); // cegah submit default supaya kita bisa validasi lebih dulu
var name = document.getElementById('name').value.trim();
var email = document.getElementById('email').value.trim();
var message = document.getElementById('message').value.trim();
var feedback = document.getElementById('form-feedback');


if (!name || !email || !message) {
feedback.style.color = 'crimson';
feedback.textContent = 'Semua kolom harus diisi.';
return;
}


// validasi email sederhana
if (!/^\S+@\S+\.\S+$/.test(email)) {
feedback.style.color = 'crimson';
feedback.textContent = 'Format email tidak valid.';
return;
}


// Kalau lolos validasi, tampilkan pesan sukses
feedback.style.color = 'green';
feedback.textContent = 'Terima kasih! Pesan kamu berhasil dikirim (simulasi).';


// Di tahap nyata, di sini kita akan mengirim data ke server via fetch/AJAX atau action form.
// contoh: fetch('/api/contact', { method: 'POST', body: JSON.stringify({name,email,message}) })


// reset form setelah beberapa detik (opsional)
setTimeout(function() {
form.reset();
feedback.textContent = '';
}, 2500);
});
}
});