export const toUpperCaseFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const formatCurrency = (value) => value.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

export const formatCurrencyWithoutDecimal = (value) =>
  value.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 });

export const compareById = (a, b) => a.id - b.id;

import matYogaElemento from "./img/1-mat-yoga-elemento.jpg";
import matYogaSuperior from "./img/2-mat-yoga-superior.jpg";
import matYogaPilate from "./img/3-mat-yoga-pilate.png";
import matYogaCorcho from "./img/4-mat-yoga-corcho.png";
import portaMatOMLila from "./img/5-portamat1.png";
import portaMatOMGolden from "./img/6-portamat2.png";
import tacoMadera from "./img/7-taco-madera.png";
import cintoYogaDosMts from "./img/8-cinto yoga.jpg";
import zafuVison from "./img/9-zafu-vison.jpg";
import zafuGrisPerla from "./img/10-zafu-gris-perla.jpg";
import leggingYogaGlow from "./img/11-legging-yoga-glow.jpg";
import leggingYogaTrip from "./img/12-legging-yoga-trip-atenea.jpg";

export const imgProducts = {
  matYogaElemento,
  matYogaSuperior,
  matYogaPilate,
  matYogaCorcho,
  portaMatOMLila,
  portaMatOMGolden,
  tacoMadera,
  cintoYogaDosMts,
  zafuVison,
  zafuGrisPerla,
  leggingYogaGlow,
  leggingYogaTrip,
};
