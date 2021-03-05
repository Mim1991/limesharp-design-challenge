const initExpansion = () => {
  const card = document.querySelectorAll(".card");
  const cards = document.querySelector(".cards");

  function toggleModal() {
    const button = this.childNodes[3].lastElementChild;
    const cardText = this.querySelector(".text-expand");

    if (
      button.src ===
      "http://localhost:3000/assets/plus-6e07896c249f5d353787548226300b5868b705c2c70067c5665f888a90dc30fe.png"
    ) {
      button.src =
        "http://localhost:3000/assets/minus-cc83297b53714b62a85a9bfdc0d09cd9452717b12914c6362a23e76fef65e78f.png";
    } else {
      button.src =
        "http://localhost:3000/assets/plus-6e07896c249f5d353787548226300b5868b705c2c70067c5665f888a90dc30fe.png";
    }

    cards.classList.toggle("card-close");
    cardText.classList.toggle("text-hidden");
  }

  card.forEach((card) => card.addEventListener("click", toggleModal));
};

export { initExpansion };
