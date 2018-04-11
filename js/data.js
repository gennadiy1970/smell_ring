function Parfume(arr) {
  this.name = arr[0];
  this.model = arr[1];
  this.note_begin = arr[2];
  this.note_heart = arr[3];
  this.note_base = arr[4];
}

const colorsModel = {
  Oriental: "#9a042f",
  "Woody Oriental": "#b5560d",
  Woods: "#c08a39",
  "Mossy Woods": "#44745c",
  "Dry Woods": "#8b8450",
  Aromatic: "#564D82",
  Citrus: "#ffdd00",
  Water: "#008ec2",
  Green: "#7db955",
  Fruity: "#ec7804",
  Floral: "#e6362d",
  "Soft Floral": "#eb6ba0",
  "Floral Oriental": "#e0007b",
  "Soft Oriental": "#c71f81"
};

const LR = [
  [
    "Sensual Grace",
    "Floral",
    "боярышник, дикая слива",
    "цветы ириса, гелиотроп, фрезия, жасмин, роза, ландыш",
    "ваниль, янтарь, белый мускус "
  ],
  [
    "Harem",
    "Oriental",
    "бергамот, мандарин, шоколадно-карамельный аромат",
    "жасмин, маракуйя, персик, абрикос",
    "пачули, ваниль, специи "
  ],
  [
    "Femme Noblesse",
    "Oriental",
    "цветы апельсина, герань, базилик, бергамот",
    "иланг-иланг, фиалка, жасмин, тубероза, корица, кардамон, гвоздика",
    "ваниль, мед, мускус, сандаловое дерево, мох "
  ],
  [
    "Pseudonym",
    "Floral",
    "персик, дыня, личи",
    "жасмин, водяная лилия, фиалка",
    "ветивер, сандаловое дерево, ваниль"
  ],
  [
    "Beautyqueen",
    "Floral",
    "бергамот, мандарин, ананас, черная смородина",
    "роза, жасмин, фиалка",
    "амбра, мускус, ваниль, дубовый мох"
  ],
  [
    "Eau de Style",
    "Floral",
    "ежевика, зелёное яблоко, персик",
    "жасмин, ландыш",
    "кедр, амбра, ваниль, мускус"
  ],
  [
    "Heart & Soul",
    "Floral",
    "красный апельсин, ананас, фрезия",
    "черная смородина, пион, груша, слива",
    "мускус, сандаловое дерево, белый кедр, легкий аккорд ванили"
  ]
];

const parfumesLR = LR.map(elem => new Parfume(elem));

// console.log(`parfumesLR = ${parfumesLR[0].name}`);

const list = document.querySelector(".container_list");

// function showList(arr) {
//   list.innerHTML =
//     "<h1>The List of Parfume</h1>" +
//     arr
//       .map(
//         elem => `<div class="parfum">
// <h3>${elem.name}</h3>
// <h4 style="color: ${colorsModel[elem.model]}">Ноты: ${elem.model}</h4>
// <table>
// <tr>
// <th>начальная нота</th>
// <th>нота сердца</th>
// <th>базовая нота</th>
// </tr>
// <tr>
// <td>${elem.note_begin}</td>
// <td>${elem.note_heart}</td>
// <td>${elem.note_base}</td>
// </tr>
// </table>
// </div>`
//       )
//       .join("");
// }
