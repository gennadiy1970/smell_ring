const elemList = document.querySelector(".list");

function fillList(arr, parent) {
  parent.innerHTML = arr
    .filter((elem, i) => i < 10)
    .map(
      elem => `
        <li class="list__item">
          <div class="list__item--header">
            <h3 class="list__brand">${elem.brand}</h3>
            <h4 class="list__name">${elem.name}</h4>
          </div>
          <div class="list__about--hide">
              <h3 class="list__brand">${elem.brand}</h3>
              <h4 class="list__name">${elem.name}</h4>
              <ul>
                 <li><b>Тип:</b> <br>${elem.type.join(", <br>")}</li>
                 <li><b>Верхние ноты:</b><br>${elem.top_note.join(
                   ", <br>"
                 )}</li>
                 <li><b>Ноты сердца:</b><br>${elem.middle_note.join(
                   ", <br>"
                 )}</li>
                 <li><b>Базовые ноты:</b><br>${elem.base_note.join(
                   ", <br>"
                 )}</li>
                 <li>${elem.sex}</li>
              </ul>
          </div>
        </li>`
    )
    .join("");
}
