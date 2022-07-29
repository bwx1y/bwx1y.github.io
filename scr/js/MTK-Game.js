window.onload = () => {
  const soal1 = document.querySelector("#soal1");
  const soal2 = document.querySelector("#soal2");
  const operator = document.querySelector("#operator");
  const button = document.querySelector(".input-group button");
  const jawaban = document.querySelector("#jawaban");

  let random = Math.random();

  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  const setOperator = () => {
    if (random <= 0.34) return "+";
    if (random >= 0.34 && random <= 0.7) return "x";
    return "-";
  };

  soal1.innerHTML = randomNumber();
  soal2.innerHTML = randomNumber();
  operator.innerHTML = setOperator();

  const getResult = () => {
    switch (operator.textContent) {
      case "+":
        return parseInt(soal1.textContent) + parseInt(soal2.textContent);
        break;
      case "-":
        return parseInt(soal1.textContent) - parseInt(soal2.textContent);
        break;
      case "x":
        return parseInt(soal1.textContent) * parseInt(soal2.textContent);
        break;
    }
  };

  button.addEventListener("click", () => {
    if (jawaban.value) {
      // console.log(jawaban.value.trim())
      jawaban.value == getResult() ? Swal.fire({ title: "Selamat !", icon: "success" }) : Swal.fire({ title: "Coba lagi", icon: "error" });
    } else Swal.fire({ title: "Tidak ada input", icon: "info" });

    setTimeout(() => {
      window.location.reload();
      jawaban.value = "";
    }, 1500);

    button.disabled = true;
  });
};
