import React from "react"
import { DashboardContentCard } from "./DashboardContentCard";
import "./DashboardContent.css";


export const DashboardContent = (props) => {

    const lstCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
            <div className="row display-prop" >
                {
                    lstCard.map((index) => (
                        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 bm-30" >
                            <DashboardContentCard />
                        </div>
                    ))
                }
            </div>
    );
}
