function togglePanel(panelId) {
    const panelSpid = document.getElementById('panel-spid');
    const panelCie = document.getElementById('panel-cie');
    
    const targetPanel = document.getElementById(panelId);
    const otherPanel = (targetPanel === panelSpid) ? panelCie : panelSpid;
    const button = targetPanel.querySelector('.btn-expand');
    const img = targetPanel.querySelector('.panel-image');

    if (targetPanel.classList.contains('expanded')) {
        targetPanel.classList.remove('expanded');
        otherPanel.classList.remove('hidden');
        button.textContent = "Scopri di più";
        img.classList.remove('expanded');

        targetPanel.scrollTop = 0; 
    } else {
        targetPanel.classList.add('expanded');
        otherPanel.classList.add('hidden');
        button.textContent = "Torna indietro";
        img.classList.add('expanded');
    }
}

function openPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('attivo');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('attivo');
}

window.onclick = function(event) {
    const popup = document.getElementById('mio-popup');
    if (event.target === popup) {
        popup.classList.remove('attivo');
    }
}
