// WhatsApp Integration Form
document.getElementById('perfumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get inputs values
    const name = document.getElementById('userName').value;
    const perfume = document.getElementById('userPerfume').value;
    const message = document.getElementById('userMessage').value;
    
    // Rtal Fragrances phone number
    const phone = "212776244794";
    
    // Format the WhatsApp message beautifully
    const text = `Bonjour Rtal Fragrances, je m'appelle *${name}*.\nJe suis intéressé(e) par le parfum : *${perfume}*.\n\n*Message :*\n${message}`;
    
    // Encode the text for URL safety
    const encryptedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${phone}?text=${encryptedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
});