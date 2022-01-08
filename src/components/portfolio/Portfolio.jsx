import { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {frontendPortfolio,backendPortfolio,databasePortfolio,otherPortfolio} from "../../data";

export default function Portfolio() {
const [selected, setSelected] = useState("frontend");
const [data, setData] = useState([]);
    const list = [
        {
            id:"frontend",
            title:"Frontend/UI",

        },
        {
            id:"backend",
            title:"Backend/Languages"

        },
        {
            id:"database",
            title:"Databases"
        },
        {
            id:"other",
            title:"Others"
        }
        
    ];
    useEffect(()=>{
        switch(selected){
        case"frontend":
            setData(frontendPortfolio);
            break;
            case"backend":
            setData(backendPortfolio);
            break;
            case"database":
            setData(databasePortfolio);
            break;
            case"other":
            setData(otherPortfolio);
            break;
            default:
            setData(frontendPortfolio);


        }

    },[selected])
    return (
        <div className="portfolio" id="portfolio">
        <h1>Skills</h1>
        <ul>
           {list.map((item)=>(
               <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
               id={item.id}
               />
           ))} 
        </ul>
        <div className="container">
            {data.map((d)=>(
                   <div className="item">
                   <img src={d.img} alt=""/>
                   <h3>{d.title}</h3>
               </div>

            ))}
         
            

        </div>
        </div>
    );
}
