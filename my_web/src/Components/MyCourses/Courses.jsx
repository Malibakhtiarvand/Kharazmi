import React, { useEffect, useState } from "react";
import { ConnectToServer } from "../services/http";

export const Courses = () => {
    const [cources, setCources] = useState([])
    useEffect(
        () => {
            const GetCources = async () => {
                const { data } = await ConnectToServer('GET', {}, '', 'cources')
                setCources(data)
            }
            GetCources()
        }
    )
    return (
        <div>
            {
                cources.map(
                    index => {
                        <div>
                            <h2>{index.titke}</h2>
                            <table>
                                <thead>
                                    <th>تعداد قمست ها</th>
                                    <th>تعداد آرای مثبت</th>
                                    <th>تعداد آرای منفی</th>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{index.length}</td>
                                        <td>{index.ok}</td>
                                        <td>{index.bad}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                )
            }
        </div>
    )
}
