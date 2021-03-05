const initExpansion = () => {
  const card = document.querySelectorAll(".card");

  card.forEach((card) => {
    card.addEventListener("click", function () {
      const button = this.childNodes[3].lastElementChild;
      console.log(button.src);
      const textCard = this.children[1].children[1];
      if (
        textCard.innerText ===
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ) {
        textCard.innerText =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.";
      } else {
        textCard.innerText =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
      }

      if (
        button.src ===
        "http://localhost:3000/assets/plus-6e07896c249f5d353787548226300b5868b705c2c70067c5665f888a90dc30fe.png"
      ) {
        console.log("plus");
        button.src =
          "http://localhost:3000/assets/minus-cc83297b53714b62a85a9bfdc0d09cd9452717b12914c6362a23e76fef65e78f.png";
      } else {
        button.src =
          "http://localhost:3000/assets/plus-6e07896c249f5d353787548226300b5868b705c2c70067c5665f888a90dc30fe.png";
      }
    });
  });
};

export { initExpansion };
