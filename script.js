
document.getElementById("bookingForm").addEventListener("submit", function(event){
  event.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const service = this.service.value;
  const date = this.date.value;
  const time = this.time.value;
  const message = `Hello, I want to book an appointment:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}`;
  const whatsappURL = `https://wa.me/+91 9014804271?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
});
