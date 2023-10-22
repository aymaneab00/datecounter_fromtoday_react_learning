import { useState } from "react";
export default function App() {
  return (
    <div>
      {/*<Fcounter />*/}
      <Scounter />
    </div>
  );
  /*function Fcounter() {
    const [step, setStep] = useState(0);
    function handleSteppl() {
      setStep((s) => s + 1);
    }
    function handleSteppp() {
      setStep((s) => s - 1);
    }
    return (
    

      <div>
        <button onClick={handleSteppp}> -</button>
        <span> Step: {step} </span>
        <button onClick={handleSteppl}> + </button>
      </div>
    );
  } */
  function Scounter() {
    const date = new Date(); /* creation d un date cela cree un date d aujourd hui  */
    const [count, setCount] = useState(0);
    function handleCount() {
      setCount((c) => c + 1);
      //   setDate((d)=>{const date=new Date(d);
      // date.setDate(d.getDate()+count);
      // return date }
      //  date(le nom de variable ).setDate -cest la fonction qui modifie la date(date.getDate()"getDate()la fonction qui extraire la date de variable"+c 'la valeur ajoute')
    }
    function handleCountp() {
      setCount((c) => c - 1);
      // setDate((d)=>d.getDate() - count))
    }
    date.setDate(date.getDate() + count);
    function handleReset() {
      setCount((c) => (c = 0));
    }
    return (
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          {count}
          <br />

          <button onClick={handleCountp}> -</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={handleCount}> + </button>
        </div>
        <div>
          <p>
            {count === 0
              ? "Aujourdhui cest "
              : count > 0
              ? `${count} jours apres ce date duree cest`
              : ` ${count} jours avant aujourdui c est `}
          </p>
          <p> {date.toDateString()} </p>
          {count !== 0 ? (
            <div>
              <button onClick={handleReset}>Reinisialiser </button>
            </div>
          ) : null}{" "}
          {/* if the state of the count is differet to 0 then show the button to reset it 
        else dont show it 
        we dont show it with return in null
        */}
        </div>
      </div>
    );
  }
}
