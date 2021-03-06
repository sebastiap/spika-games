import React from "react"
import Card from "../../components/common/card/project_card"

const Pcards = () =>
{
    return(
        <div className="proyectCards">
            <h2>Proyecto C.A.R.D.S.</h2>
            <div className="proyectcardrow" >
                <div className="imgcard" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG" alt="Logo de Proyecto C.A.R.D.S" />
                    </div>
                    <Card name="Que es?" tel="El proyecto CARDS (Cartas Adaptando Remakes Diferenciados Sutilmente) o bien ese proyecto loco de adaptar un juego de mesa popular para poder ser jugado 
                    con mazos estandar (Cartas Españoles o Inglesas), nace de ver que muchos juegos se basan unicamente en su diseño para vender.
                    Siendo tecnicos, estos juegos serian DEMAKES y no REMAKES, ya que ignoran la parti visual para hacer foco en la jugabilidad.
                    Esto continua la filosofia antes planteada de que 'El mazo de cartas es una plataforma de juegos'.
                    Ademas, cada tanto mecharemos con flasheadas sobre los distintos mazos, asi como juegos de cartas que se me vayan ocurriendo."> </Card>
                </div>
            <div className="proyectcardrow" >
            <Card name="Ser Parte" tel="Tenes una idea similar? Hacenosla llegar! Mas y mas personas podran jugar a estos juegos gratuitamente"> </Card>
            <Card name="Que es?" tel="Contamos con un amplio catalogo de adaptaciones, entre ellos: High society, Kuribo, One Night Werewolf"> </Card>
            </div>
        </div>
    );
};

export default Pcards;