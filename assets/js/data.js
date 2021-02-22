post = [
    {
        "postTitle": "Peran AI dalam perusahaan IT",
        "img": "assets/img/post/ai.jpg",
        "content": "Kecerdasan buatan adalah kecerdasan yang ditambahkan kepada suatu sistem yang bisa diatur dalam konteks ilmiah atau bisa disebut juga intelegensi artifisial atau hanya disingkat AI, didefinisikan sebagai kecerdasan entitas ilmiah",
        "category": "technology"
    },
    {
        "postTitle": "Mengenal Argument Reality",
        "img": "assets/img/post/ar.jpg",
        "content": "adalah teknologi yang menggabungkan benda maya dua dimensi dan ataupun tiga dimensi ke dalam sebuah lingkungan nyata tiga dimensi lalu memproyeksikan benda-benda maya tersebut dalam waktu nyata",
        "category": "technology"
    },
    {
        "postTitle": "Pemanfaatan Layanan Cloud",
        "img": "assets/img/post/cloud.jpg",
        "content": "Komputasi awan adalah gabungan pemanfaatan teknologi komputer dan pengembangan berbasis Internet. Awan adalah metafora dari internet, sebagaimana awan yang sering digambarkan di diagram jaringan komputer.",
        "category": "technology"
    },
    {
        "postTitle": "Belajar CSS lebih mudah",
        "img": "assets/img/post/css.jpg",
        "content": "Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman",
        "category": "pemrograman"
    },
    {
        "postTitle": "Belajar JavaScript",
        "img": "assets/img/post/js.jpg",
        "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT.",
        "category": "pemrograman"
    },
    {
        "postTitle": "Belajar PHP",
        "img": "assets/img/post/php.jpg",
        "content": "PHP: Hypertext Preprocessor adalah bahasa skrip yang dapat ditanamkan atau disisipkan ke dalam HTML. PHP banyak dipakai untuk memprogram situs web dinamis. PHP dapat digunakan untuk membangun sebuah CMS",
        "category": "pemrograman"
    },
    {
        "postTitle": "Mengenal Virtual Reality",
        "img": "assets/img/post/vr.jpg",
        "content": "Virtual reality, realitas maya, atau realitas virtual adalah teknologi yang membuat pengguna dapat berinteraksi dengan suatu lingkungan yang disimulasikan oleh komputer, suatu lingkungan sebenarnya yang ditiru atau benar-benar suatu lingkungan yang hanya ada dalam imajinasi",
        "category": "technology"
    }
]

for (var i = 0; i < post.length; i++) {
    var title = post[i].postTitle;
    var content = post[i].content;
    var img = post[i].img;
    var category = post[i].category;
    var badge = document.createElement('article');
    badge.className = 'card';
    badge.innerHTML =
        `<h3>${title}</h3>
        <img src="${img}"/>
        <span class="kategori">${category}</span>
        <p>${content}</p>
        `;
    document.getElementById('content').appendChild(badge);
}