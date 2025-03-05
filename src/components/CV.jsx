import { useState } from 'react';

export default function Cv( {data} ) {
    return <div className="cv">
        {data.name}
        {data.email}
        {data.pn}
        {data.university}
    </div>
    }