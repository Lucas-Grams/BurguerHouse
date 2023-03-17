function mask_data() {
  var n_cpf = document.getElementById("cpf").value.length;
  if (n_cpf == 3) {
    document.getElementById("cpf").value =
      document.getElementById("cpf").value + ".";
  } else if (n_cpf == 7) {
    document.getElementById("cpf").value =
      document.getElementById("cpf").value + ".";
  } else if (n_cpf == 11) {
    document.getElementById("cpf").value =
      document.getElementById("cpf").value + "-";
  }
}
function mask_cell() {
  var n_cell = document.getElementById("cell").value.length;
  if (n_cell == 0) {
    document.getElementById("cell").value =
      document.getElementById("cell").value + "";
  } else if (n_cell == 2) {
    document.getElementById("cell").value =
      document.getElementById("cell").value + " ";
  } else if (n_cell == 8) {
    document.getElementById("cell").value =
      document.getElementById("cell").value + "-";
  }
}
function alertar() {
  alert(
    "Pedido efetuado com sucesso.O pedido ficou R$" +
      document.getElementById("total").value +
      ",00"
  );
}
function calcular() {
  if (parseInt(document.getElementById("lanche").value) == 1) {
    switch (parseInt(document.getElementById("quantity").value)) {
      case 1: {
        document.getElementById("total").value = 15;
        break;
      }
      case 2: {
        document.getElementById("total").value = 15 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 15 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 15 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 15 * 5;
        break;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 2) {
    switch (parseInt(document.getElementById("quantity").value)) {
      case 1: {
        document.getElementById("total").value = 16;
        break;
      }
      case 2: {
        document.getElementById("total").value = 16 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 16 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 16 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 16 * 5;
        break;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 3) {
    switch (parseInt(document.getElementById("quantity").value)) {
      case 1: {
        document.getElementById("total").value = 17;
        break;
      }
      case 2: {
        document.getElementById("total").value = 17 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 17 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 17 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 17 * 5;
        break;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 4) {
    switch (parseInt(document.getElementById("qunatity").value)) {
      case 1: {
        document.getElementById("total").value = 18;
        break;
      }
      case 2: {
        document.getElementById("total").value = 18 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 18 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 18 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 18 * 5;
        break;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 5) {
    switch (parseInt(document.getElementById("quantity").value)) {
      case 1: {
        document.getElementById("total").value = 19;
        break;
      }
      case 2: {
        document.getElementById("total").value = 19 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 19 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").vlaue = 19 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 19 * 5;
        break;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 6) {
    switch (parseInt(document.getElementById("quantity").value)) {
      case 1: {
        document.getElementById("total").value = 20;
        break;
      }
      case 2: {
        document.getElementById("total").value = 20 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 20 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 20 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 20 * 5;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 7) {
    switch (parseInt(document.getElementById("quantity").value)) {
      case 1: {
        document.getElementById("total").value = 21;
        break;
      }
      case 2: {
        document.getElementById("total").value = 21 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 21 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 21 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").vlaue = 21 * 5;
        break;
      }
    }
  } else if (parseInt(document.getElementById("lanche").value) == 8) {
    switch (parseInt(document.getElementById("qunatity").value)) {
      case 1: {
        document.getElementById("total").value = 22;
        break;
      }
      case 2: {
        document.getElementById("total").value = 22 * 2;
        break;
      }
      case 3: {
        document.getElementById("total").value = 22 * 3;
        break;
      }
      case 4: {
        document.getElementById("total").value = 22 * 4;
        break;
      }
      case 5: {
        document.getElementById("total").value = 22 * 5;
        break;
      }
    }
  }
}
