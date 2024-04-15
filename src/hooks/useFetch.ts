import { useEffect, useState } from "react";
import { Cat } from "../components/CatInfoBox/CatInfoBox";

export const useFetch = (fetchURL: string): Cat[] => {

    const [data, setData] = useState<Cat[]>([])

    useEffect(() => {

        fetch(fetchURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((datas) => {
                console.log(datas);
                setData(datas);
            })
            .catch((error) => {
                console.error("Error fetching data", error)
            });
    }, [])


    return data;

}