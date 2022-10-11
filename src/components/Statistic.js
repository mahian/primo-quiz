import React from "react";
import { useLoaderData } from "react-router-dom";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";

const Statistic = () => {
    const quizes = useLoaderData();
    return (
        <section>
            <h1 className="text-center font-semibold text-4xl my-5">Quiz analytics</h1>
            <div className="p-10 overflow-x-auto">
                <ComposedChart width={1024} height={500} data={quizes.data}>
                    <XAxis dataKey="total" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area
                        type="monotone"
                        dataKey="total"
                        fill="#8884d8"
                        stroke="#8884d8"
                    />
                    <Bar dataKey="total" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="total" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </section>
    );
};

export default Statistic;
