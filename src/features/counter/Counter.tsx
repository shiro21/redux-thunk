import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUserById } from "./counterSlice";
import { unwrapResult } from '@reduxjs/toolkit';
import { FakeDataProps } from "../../api/interface";

export const Counter = () => {

    const defaultStatus = useAppSelector((state) => {
        return state.counter.status
    });

    const [status, setStatus] = useState<string>(defaultStatus);
    const [data, setData] = useState([]);


    const dispatch = useAppDispatch();

    const onUpdate = async () => {
        try {
            const api = dispatch(fetchUserById())
            const result = unwrapResult(await api);
            setData(result)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        setStatus(defaultStatus)
    }, [defaultStatus])
    
    return (
        <div style={{maxWidth: "500px", margin: "0 auto", marginTop: "2rem"}}>
            <div style={{position: "relative", height: "100px", marginBottom: "1rem"}}>
                <button style={{width: "100%", height: "40px", border: "1px solid #DDD", backgroundColor: "#FFF", borderRadius: "16px"}} onClick={onUpdate}>업데이트</button>
                <span style={{position: "absolute", bottom: "0", right: "0"}}>현재상태: {status}</span>
            </div>
            <ul>
                {
                    data.length > 0 && data.map((item: FakeDataProps) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};