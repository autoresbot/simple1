// Function untuk menampilkan waktu saat ini
function showCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Menjalankan fungsi setiap 1 detik
setInterval(showCurrentTime, 1000);
