document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;

    // Jawaban acak berupa nama binatang
    const animals = [
        "Gorgon garut",
        "Hiled Cau",
        "Katak Budug",
        "Toke Mulet",
        "Kutu Rambut",
        "Cacing Pita",
        "Kutu Beras",
        "Kuda Mulet",
        "Ular Sawah",
        "Lele Hitam",
        "Babi Ngepet",
        "Kebo Kuning",
        "Cicak Lombok",
        "Lintah Darat",
        "Kuda Jaran",
        "Tikus Kuning",
        "Bebek Sakti",
        "Ayam Cemani",
        "Kerbau Laut",
        "Belut Licin",
        "Kodok Penari",
        "Biawak Belang",
        "Tawon Gendut",
        "Burung Kecoa",
        "Belalang Gagah",
        "Tikus Lombok",
        "Udang Rebus",
        "Kelelawar Geblek",
        "Kadal Gombal",
        "Jangkrik Liar",
        "Ikan Pari Goyang",
        "Domba Berontak",
        "Gajah Nyasar",
        "Harimau Polos",
        "Bintang Laut Kuning",
        "Ular Karet",
        "Ikan Pelatuk",
        "Ayam Tiru",
        "Gagak Sembunyi"
    ];
    
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `${name}, khodam Anda adalah seekor ${randomAnimal}!`;
});
