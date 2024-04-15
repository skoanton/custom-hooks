
import {useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

type CatInfoBoxProps = {}

export type Cat = {
    text:string;

}
const CatInfoBox = ({}:CatInfoBoxProps) => {

    const [texts,setTexts] = useState<string[]>([]);

    const BASE_URL = "https://cat-fact.herokuapp.com";
    const fetchURL = `${BASE_URL}/facts`;

    const datas = useFetch(fetchURL);
    console.log(datas);
    useEffect(()=> {
        datas.map((data ) => {
            setTexts(prevText => [...prevText, data.text])
        })
    },[datas])

    return (
        <>
            <h2>Fetch om katter</h2>
            {texts && texts.map((text,index) => {
                return <p key={index}>{text}</p>
            })}
        </>
    )
}

export default CatInfoBox
