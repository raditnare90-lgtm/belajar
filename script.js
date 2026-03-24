const scanBtn = document.getElementById('scanBtn');
const wifiList = document.getElementById('wifiList');
const statusText = document.getElementById('status');

const dummyNetworks = [
    { ssid: "Lab_BawahTanah_Primary", strength: "98%", security: "WPA3" },
    { ssid: "NZM4_Private_Net", strength: "95%", security: "WPA3" },
    { ssid: "Guest_Area_51", strength: "45%", security: "Open" },
    { ssid: "Hidden_Node_04", strength: "72%", security: "WPA2" },
    { ssid: "Standard_WLAN", strength: "30%", security: "WEP" }
];

scanBtn.addEventListener('click', () => {
    statusText.innerText = "Memindai...";
    wifiList.innerHTML = "";
    
    // Simulasi delay pemindaian selama 1.5 detik
    setTimeout(() => {
        dummyNetworks.forEach(net => {
            const item = document.createElement('div');
            item.className = 'wifi-item';
            item.innerHTML = `
                <div>
                    <strong>${net.ssid}</strong><br>
                    <small>Keamanan: ${net.security}</small>
                </div>
                <div class="strength">${net.strength}</div>
            `;
            wifiList.appendChild(item);
        });
        statusText.innerText = "Pemindaian Selesai";
    }, 1500);
});
