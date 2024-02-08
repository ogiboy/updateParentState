import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/**
Aşağıdaki Child butonuna tıklandığında Parent metni (Child'dan bilgi almam gerekiyor) güncellenmelidir. Parent'ın mevcut dizesini güncellemek için herhangi bir dize kullanabilirsiniz.
**/

function Child({ updateParent }) {
  return (
    <>
      <div>Child</div>
      <button onClick={updateParent}>Parent Değeri Değiştir</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState("Child'dan bilgi almam gerekiyor");
  const updateValue = () => setValue("Dm'den dönüş yapılmıştır iyi günler.");

  return (
    <>
      <h3>Parent State Güncelleme (Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child updateParent={updateValue} />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
