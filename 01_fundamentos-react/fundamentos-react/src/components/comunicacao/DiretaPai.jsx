import DiretaFilho from "./DiretaFilho";

export  default function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho nome="Pelé" idade={20} nerd={true}></DiretaFilho> 
            <DiretaFilho nome="Garrincha 2" idade={15} nerd={false}></DiretaFilho>   
        </div>
    )
}